import ApiRouter from '../../../domain/model/ApiRouter'
import EnvironmentProvider from '../../provider/EnvironmentProvider'
import Server from './Server'

export default class ServerFactory {
  static readonly create = (routers: ApiRouter[]): Server => {
    const provider = EnvironmentProvider.getInstance()

    const server = new Server(provider, routers)
    if (!server) {
      throw new Error('Failed to create server')
    }
    return server
  }
}
