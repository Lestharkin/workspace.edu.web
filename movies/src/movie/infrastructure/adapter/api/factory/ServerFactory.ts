import ServerProvider from '../../../../../api/infrastructure/adapter/api/provider/ServerProvider'
import Server from '../../../../../api/infrastructure/adapter/api/server/Server'

export default class ServerFactory {
  static readonly create = (): Server => {
    try {
      const serverProvider = new ServerProvider()

      if (!serverProvider) {
        throw new Error('Failed to create ServerProvider')
      }

      const server = new Server(serverProvider, [])

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
