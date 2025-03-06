import RouterExpressInterface from '../../domain/RouterExpressInterface'
import ErrorExpressController from '../error/controller/ErrorExpressController'
import ErrorExpressRouter from '../error/router/ErrorExpressRouter'
import Server from '../sever/Server'

export default class ServerFactory {
  public static readonly create = (
    routers: RouterExpressInterface[]
  ): Server => {
    const errorController = new ErrorExpressController()
    const errorRouter = new ErrorExpressRouter(errorController)
    return new Server(routers, errorRouter)
  }
}
