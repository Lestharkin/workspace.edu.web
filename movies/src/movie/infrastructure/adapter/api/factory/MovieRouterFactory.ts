import MovieUseCase from '../../../../application/usecase/MovieUseCase'
import AbstractMovieRouter from '../../../../domain/api/AbstractMovieRouter'
import MovieController from '../controller/MovieController'
import MovieRecorderController from '../controller/MovieRecorderController'
import MovieSeekerController from '../controller/MovieSeekerController'
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

    const movieSeekerController = new MovieSeekerController(movieUseCase)
    if (!movieSeekerController) {
      throw new Error('Failed to create MovieSeekerController')
    }

    const movieRecorderController = new MovieRecorderController(movieUseCase)
    if (!movieRecorderController) {
      throw new Error('Failed to create MovieRecorderController')
    }

    const movieRouter = new MovieRouter(
      movieController,
      movieSeekerController,
      movieRecorderController
    )
    if (!movieRouter) {
      throw new Error('Failed to create MovieRouter')
    }

    return movieRouter
  }
}
