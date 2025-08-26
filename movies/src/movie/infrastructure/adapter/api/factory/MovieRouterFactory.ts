import MovieUseCase from '../../../../application/usecase/MovieUseCase'
import AbstractMovieRouter from '../../../../domain/api/AbstractMovieRouter'
import MovieController from '../controller/MovieController'
import MovieRouter from '../router/MovieRouter'

export default class MovieRouterFactory {
  static readonly create = (): AbstractMovieRouter => {
    const movieUseCase = new MovieUseCase()
    if (!movieUseCase) {
      throw new Error('Failed to create MovieUseCase')
    }

    const movieController = new MovieController(movieUseCase)
    if (!movieController) {
      throw new Error('Failed to create MovieController')
    }

    const movieRouter = new MovieRouter(movieController)
    if (!movieRouter) {
      throw new Error('Failed to create MovieRouter')
    }

    return movieRouter
  }
}
