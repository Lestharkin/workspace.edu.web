import MovieUsecasePort from '../../domain/port/driver/usecase/MovieUsecasePort'
import MovieController from '../adapter/api/MovieController'

export default class MovieControllerFactory {
  static readonly create = (
    movieUsecase: MovieUsecasePort,
  ): MovieController => {
    const controller = new MovieController(movieUsecase)
    if (!controller) {
      throw new Error('Failed to create MovieController')
    }
    return controller
  }
}
