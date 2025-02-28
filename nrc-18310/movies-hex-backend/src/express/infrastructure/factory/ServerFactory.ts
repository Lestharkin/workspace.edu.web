import RouterExpressInterface from '../../domain/RouterExpressInterface'
import Server from '../sever/Server'

export default class ServerFactory {
  public static create(routers: RouterExpressInterface[]) {
    return new Server(routers)
  }
}
