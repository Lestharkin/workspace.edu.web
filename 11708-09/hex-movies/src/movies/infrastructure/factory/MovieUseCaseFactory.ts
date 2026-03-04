import MovieUseCase from '../../application/usecase/MovieUseCase'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieUseCaseFactory {
  static readonly create = (
    movieService: MovieServicePort,
  ): MovieUseCasePort => {
    const movieUseCase = new MovieUseCase(movieService)
    if (!movieUseCase) {
      throw new Error('Failed to create MovieUseCase')
    }
    return movieUseCase
  }
}
