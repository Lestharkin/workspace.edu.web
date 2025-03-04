import MovieControllerExpress from '../express/controller/MovieControllerExpress'
import MovieRouterExpress from '../express/router/MovieRouterExpress'
import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'
import MovieUseCaseFactory from './MovieUseCaseFactory'

export default class MovieRouterFactory {
  public static create(): RouterExpressInterface {
    const movieUseCase = MovieUseCaseFactory.create()
    const movieController = new MovieControllerExpress(movieUseCase)
    return new MovieRouterExpress(movieController)
  }
}
