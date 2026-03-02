import FinderRepository from '../../../../../../shared/domain/FinderRepository'
import Movie from '../../../../model/movie/Movie'

export default interface JSONRepositoryPort extends FinderRepository<
  string,
  Movie
> {}
