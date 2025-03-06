import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/movie/Movie'

export default class MovieService implements MovieServiceInterface {
  public retrieveMovies(): Movie[] {
    throw new Error('Method not implemented.')
  }
}
