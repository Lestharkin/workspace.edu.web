import Movie from '../../domain/movie/Movie'
import NullMovie from '../../domain/movie/NullMovie'
import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {

  constructor(private readonly movieService: MovieServiceInterface) {}
  
  public async getMovies(): Promise<Movie[]> {
    const movies = await this.movieService.retrieveMovies()

    if (movies.length === 0) {
      return [new NullMovie()]
    }

    return movies
  }
}
