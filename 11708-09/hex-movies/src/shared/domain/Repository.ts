import FinderRepository from './FinderRepository'
import ModRepository from './ModRepository'

export default interface Repository<E, T>
  extends FinderRepository<E, T>, ModRepository<E, T> {}
