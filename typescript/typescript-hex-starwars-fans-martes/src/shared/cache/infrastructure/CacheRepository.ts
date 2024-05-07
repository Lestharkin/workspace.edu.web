import RedisDBC from "../../../util/redis/RedisDBC/RedisDBC"
import CacheRepositoryPort from "../domain/port/driven/CacheRepositoryPort"

export default class CacheRepository<E> implements CacheRepositoryPort<E> {

  constructor(
    private readonly redisDBC: RedisDBC,
    private readonly expirationTime: number
  ) {}

  public get = async (key: string): Promise<E | null> => {
    const value = await this.redisDBC.getClient().get(key) ?? null
    if (value) {
      return await JSON.parse(value) as E
    }
    return null
  }
  public set = async (key: string, value: E): Promise<boolean> => {
    const reply = this.redisDBC
    .getClient().
    set(key, JSON.stringify(value), {PX: this.expirationTime})
    return await reply === 'OK'
  }
  public isHealthy = async (): Promise<boolean> => {
    return await this.redisDBC.isHealthy()
  }
}