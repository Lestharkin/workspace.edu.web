import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/movie/Movie'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {
  constructor(private readonly movieService: MovieServiceInterface) {}

  public getMovies(): Movie[] {
    let movies = this.movieService.retrieveMovies()

    if (movies.length === 0) {
      return []
    }

    movies = movies.map((movie) => {
      movie.setPrice(movie.validatePrice(movie.getPrice()))
      return movie
    })

    return movies
  }
}
