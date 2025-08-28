export default interface Repository<E, T> {
  findAll: () => Promise<T[]>
  findById: (id: E) => Promise<T>
  save: (item: T) => Promise<T>
  update: (item: T) => Promise<T>
  patch: (id: E, item: Partial<T>) => Promise<T>
  delete: (id: E) => Promise<boolean>
}
