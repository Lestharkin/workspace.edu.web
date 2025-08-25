import AbstractRouter from '../../../../domain/model/AbstractRouter'
import Server from '../server/Server'
import ErrorRouterFactory from './ErrorRouterFactory'
import ServerProviderFactory from './ServerProviderFactory'

export default class ServerFactory {
  static readonly create = (routers: AbstractRouter[]): Server => {
    try {
      const serverProvider = ServerProviderFactory.create()

      const errorRouter = ErrorRouterFactory.create()

      const server = new Server(serverProvider, [...routers, errorRouter])

      if (!server) {
        throw new Error('Failed to create Server')
      }

      return server
    } catch (error) {
      console.error('Error creating server:', error)
      throw error
    }
  }
}
