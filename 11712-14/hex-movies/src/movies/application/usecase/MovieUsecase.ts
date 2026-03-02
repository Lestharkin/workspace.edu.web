import Movie from '../../domain/model/movie/Movie'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'
import MovieUsecasePort from '../../domain/port/driver/usecase/MovieUsecasePort'
import NullMovie from '../../domain/model/movie/NullMovie'

export default class MovieUsecase implements MovieUsecasePort {
  constructor(private readonly movieService: MovieServicePort) {}

  readonly getById = async (id: string): Promise<Movie> => {
    const movie = await this.movieService.retrieveById(id)
    if (!movie) {
      return new NullMovie()
    }
    return movie
  }
}
