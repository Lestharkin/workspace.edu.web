import RouterExpressInterface from '../../domain/RouterExpressInterface'
import ErrorControllerExpress from '../error/controller/ErrorControllerExpress'
import ErrorRouterExpress from '../error/router/ErrorRouterExpress'
import Server from '../sever/Server'

export default class ServerFactory {
  public static readonly create = (
    routers: RouterExpressInterface[]
  ): Server => {
    const errorController = new ErrorControllerExpress()
    const errorRouter = new ErrorRouterExpress(errorController)
    return new Server(routers, errorRouter)
  }
}
