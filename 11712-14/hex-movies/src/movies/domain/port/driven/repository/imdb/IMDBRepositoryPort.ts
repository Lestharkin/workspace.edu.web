import FinderRepository from '../../../../../../shared/domain/FinderRepository'
import Movie from '../../../../model/movie/Movie'

export default interface IMDBRepositoryPort extends FinderRepository<
  string,
  Movie
> {}
