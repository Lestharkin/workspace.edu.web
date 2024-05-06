import RedisDBC from "../../../util/redis/RedisDBC/RedisDBC"
import CacheRepositoryPort from "../domain/port/driven/CacheRepositoryPort"

export default class CacheRepository<E> implements CacheRepositoryPort<E> {
  constructor(
    private readonly redisDBC: RedisDBC,
    private readonly expirationTime: number
  ) {}

  public async get(key: string): Promise<E | null> {
    const value = await this.redisDBC.getClient().get(key) ?? null
    if (value) {
      return await JSON.parse(value) as E
    }
    return null
  }

  public async set(key: string, value: E): Promise<boolean> {
    const reply = this.redisDBC
    .getClient().
    set(key, JSON.stringify(value), {PX: this.expirationTime})
    return await reply === 'OK'
  }  

  public async isHealthy(): Promise<boolean> {
    return await this.redisDBC.isHealthy()
  }
}