export default interface ModRepository<E, T> {
  save: (item: T) => Promise<T>
  update: (id: E, item: Partial<T>) => Promise<T | boolean>
  delete: (id: E) => Promise<boolean>
}
