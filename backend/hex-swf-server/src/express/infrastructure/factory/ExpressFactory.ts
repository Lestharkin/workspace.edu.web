import MovieControllerExpress from '../../../movie/infrastructure/express/controller/MovieControllerExpress'
import MovieRouterExpress from '../../../movie/infrastructure/express/router/MovieRouterExpress'
import Server from '../server/Server'

export default class ExpressFactory {
  public static readonly create = (): Server => {
    const movieController = new MovieControllerExpress()
    // TODO: validate controller
    const movieRouter = new MovieRouterExpress(movieController)
    // TODO: validate router
    const server = new Server([movieRouter])
    // TODO: validate server
    return  server
  }
}
