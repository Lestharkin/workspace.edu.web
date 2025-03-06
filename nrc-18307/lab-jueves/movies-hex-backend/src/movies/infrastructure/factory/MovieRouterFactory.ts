import MovieUseCase from '../../application/usecase/MovieUseCase'
import MovieControllerExpress from '../express/controller/MovieControllerExpress'
import MovieRouterExpress from '../express/router/MovieRouterExpress'
import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'

export default class MovieRouterFactory {
  public static create(): RouterExpressInterface {
    const movieUseCase = new MovieUseCase()
    const movieController = new MovieControllerExpress(movieUseCase)
    return new MovieRouterExpress(movieController)
  }
}
