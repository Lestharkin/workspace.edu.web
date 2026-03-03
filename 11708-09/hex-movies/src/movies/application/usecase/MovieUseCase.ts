import Movie from '../../domain/model/movie/Movie'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {
  constructor(private readonly movieService: MovieServicePort) {}

  readonly getMovieByTitle = async (title: string): Promise<Movie> => {
    const movie = await this.movieService.retrieveMovieByTitle(title)
    if (!movie) {
      throw new Error(`Movie with title ${title} not found`)
    }
    return movie
  }
}
