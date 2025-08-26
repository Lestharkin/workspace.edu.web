import Server from '../../../../../api/infrastructure/adapter/api/server/Server'
import { AbstractRouter } from '../../../../API'
import ErrorRouterFactory from './ErrorRouterFactory'
import ServerProviderFactory from './ServerProviderFactory'

export default class ServerFactory {
  static readonly create = (routers: AbstractRouter[]): Server => {
    try {
      const errorRouter = ErrorRouterFactory.create()

      const serverProvider = ServerProviderFactory.create()

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
