import RepositoryInterface from '../../../../repository/domain/RepositoryInterface'
import Movie from '../../movie/Movie'

export default interface SWMovieRepositoryPort
  extends RepositoryInterface<string, Movie> {}
