import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/movie/Movie'
import SWMovieRepositoryPort from '../../domain/port/driven/SWMovieRepositoryPort'

export default class MovieService implements MovieServiceInterface {
  constructor(
    private readonly swMovieRepository: SWMovieRepositoryPort
  ) {}

  public retrieveMovies = (): Promise<Movie[]> => {
    const swMovies = this.swMovieRepository.findAll()

    return swMovies
  }
}
