export default interface RepositoryInterface<E, T> {
  findAll: () => Promise<T[]>
  findById: (id: E) => Promise<T>
  save: (item: T) => Promise<T>
  update: (id: E, item: T) => Promise<T | boolean>
  patch: (id: E, item: Partial<T>) => Promise<T | boolean>
  delete: (id: E) => Promise<boolean>
}
