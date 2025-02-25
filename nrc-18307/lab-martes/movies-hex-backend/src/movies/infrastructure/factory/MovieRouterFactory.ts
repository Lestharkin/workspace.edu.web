import MovieUseCase from '../../application/usecase/MovieUseCase'
import MovieControllerExpress from '../express/controller/MovieControllerExpress'
import MovieRouterExpress from '../express/router/MovieRouterExpress'

export default class MovieRouterFactory {
  public static create(): MovieRouterExpress {
    const movieUseCase = new MovieUseCase()
    const movieController = new MovieControllerExpress(movieUseCase)
    return new MovieRouterExpress(movieController)
  }
}
