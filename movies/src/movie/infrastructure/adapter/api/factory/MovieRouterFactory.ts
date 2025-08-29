import { SwapiDBC } from '../../../../../shared/Shared'
import MovieService from '../../../../application/service/MovieService'
import MovieUseCase from '../../../../application/usecase/MovieUseCase'
import AbstractMovieRouter from '../../../../domain/api/AbstractMovieRouter'
import SwapiRepository from '../../repository/SwapiRepository/SwapiRepository'
import MovieController from '../controller/MovieController'
import MovieRecorderController from '../controller/MovieRecorderController'
import MovieSeekerController from '../controller/MovieSeekerController'
import MovieRouter from '../router/MovieRouter'

export default class MovieRouterFactory {
  static readonly create = (): AbstractMovieRouter => {
    const swapiDBC = SwapiDBC.getInstance()

    const swapiRepository = new SwapiRepository(swapiDBC)
    if (!swapiRepository) {
      throw new Error('Failed to create SwapiRepository')
    }

    const movieService = new MovieService(swapiRepository)
    if (!movieService) {
      throw new Error('Failed to create MovieService')
    }

    const movieUseCase = new MovieUseCase(movieService)
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
