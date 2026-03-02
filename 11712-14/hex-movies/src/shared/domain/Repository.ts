import FinderRepository from './FinderRepository'

export default interface Repository<E, T> extends FinderRepository<E, T> {
  save: (item: T) => Promise<T>
  update: (id: E, item: Partial<T>) => Promise<T | boolean>
  delete: (id: E) => Promise<boolean>
}
