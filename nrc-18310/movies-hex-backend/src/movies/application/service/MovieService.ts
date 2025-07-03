import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/movie/Movie'
import SWMovieRepositoryPort from '../../domain/port/driven/SWMovieRepositoryPort'

export default class MovieService implements MovieServiceInterface {
  constructor(private readonly swMovieRepository: SWMovieRepositoryPort) {}

  public async retrieveMovies(): Promise<Movie[]> {
    const movies = await this.swMovieRepository.findAll()

    if (movies === undefined || movies.length === 0 || movies === null) {
      return []
    }

    return movies
  }
}
