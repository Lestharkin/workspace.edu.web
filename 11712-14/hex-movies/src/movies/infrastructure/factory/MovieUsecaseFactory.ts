import MovieUsecase from '../../application/usecase/MovieUsecase'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'
import MovieUsecasePort from '../../domain/port/driver/usecase/MovieUsecasePort'

export default class MovieUsecaseFactory {
  static readonly create = (
    movieService: MovieServicePort,
  ): MovieUsecasePort => {
    const usecase = new MovieUsecase(movieService)
    if (!usecase) {
      throw new Error('Failed to create MovieUsecase')
    }
    return usecase
  }
}
