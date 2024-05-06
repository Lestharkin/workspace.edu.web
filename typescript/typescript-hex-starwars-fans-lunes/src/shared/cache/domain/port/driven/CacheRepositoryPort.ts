export default interface CacheRepositoryPort<E> {
  get(key: string): Promise<E | null>
  set(key: string, value: E): Promise<boolean>
  isHealthy(): Promise<boolean>
}
