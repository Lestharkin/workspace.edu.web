import MovieControllerInterface from '../../domain/api/MovieControllerInterface'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'
import MovieController from '../adapter/api/MovieController'

export default class MovieControllerFactory {
  static readonly create = (
    movieUseCase: MovieUseCasePort,
  ): MovieControllerInterface => {
    const controller = new MovieController(movieUseCase)
    if (!controller) {
      throw new Error('Failed to create MovieController')
    }
    return controller
  }
}
