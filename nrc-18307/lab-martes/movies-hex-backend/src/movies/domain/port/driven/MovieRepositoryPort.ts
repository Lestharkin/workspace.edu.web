import RepositoryInterface from '../../../../repository/domain/RepositoryInterface'
import Movie from '../../movie/Movie'

export default interface MovieRepositoryPort
  extends RepositoryInterface<string, Movie> {}
