import MovieRetrieverService from '../../../movie/application/service/MovieRetrieverService'
import MovieUseCase from '../../../movie/application/usecase/MovieUseCase'
import MovieControllerExpress from '../../../movie/infrastructure/express/controller/MovieControllerExpress'
import MovieRouterExpress from '../../../movie/infrastructure/express/router/MovieRouterExpress'
import Server from '../server/Server'

export default class ExpressFactory {
  public static readonly create = (): Server => {
    const movieRetrieverService = new MovieRetrieverService()
    // TODO: validate service
    const movieUseCase = new MovieUseCase(movieRetrieverService)
    // TODO: validate use case
    const movieController = new MovieControllerExpress(movieUseCase)
    // TODO: validate controller
    const movieRouter = new MovieRouterExpress(movieController)
    // TODO: validate router
    const server = new Server([movieRouter])
    // TODO: validate server
    return  server
  }
}
