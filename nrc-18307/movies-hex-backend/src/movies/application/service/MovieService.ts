import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/movie/Movie'
import MovieRepositoryPort from '../../domain/port/driven/MovieRepositoryPort'
import SWMovieRepositoryPort from '../../domain/port/driven/SWMovieRespositoryPort'

export default class MovieService implements MovieServiceInterface {
  constructor(
    private readonly movieRepository: MovieRepositoryPort,
    private readonly swMovieRepository: SWMovieRepositoryPort
  ) {}

  public retrieveMovies = (): Promise<Movie[]> => {
    const movies = this.movieRepository.findAll()
    const swMovies = this.swMovieRepository.findAll()

    return Promise.all([movies, swMovies]).then((values) => {
      return [...values[0], ...values[1]]
    })
  }
}
