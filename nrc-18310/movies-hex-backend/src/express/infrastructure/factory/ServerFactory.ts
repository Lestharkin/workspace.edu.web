import RouterExpressInterface from '../../domain/RouterExpressInterface'
import Server from '../sever/Server'

export default class ServerFactory {
  public static readonly create = (routers: RouterExpressInterface[]): Server => {
    return new Server(routers)
  }
}
