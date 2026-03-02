export default interface FinderRepository<E, T> {
  findAll: () => Promise<T[]>
  findById: (id: E) => Promise<T>
}
