import RouterExpressInterface from '../../domain/RouterExpressInterface'
import ErrorExpressController from '../controller/ErrorExpressController'
import ErrorExpressRouter from '../router/ErrorExpressRouter'
import Server from '../sever/Server'

export default class ServerFactory {
  public static readonly create = (
    routes: RouterExpressInterface[]
  ): Server => {
    const errorController = new ErrorExpressController()
    const errorRouter = new ErrorExpressRouter(errorController)
    const server = new Server(routes, errorRouter)

    return server
  }
}
