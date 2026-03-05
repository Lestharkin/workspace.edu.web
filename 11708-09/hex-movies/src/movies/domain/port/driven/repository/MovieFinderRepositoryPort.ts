import FinderRepository from '../../../../../shared/domain/FinderRepository'
export default interface MovieFinderRepositoryPort<
  E,
  T,
> extends FinderRepository<E, T> {
  readonly findByTitle: (title: string) => Promise<T>
}
