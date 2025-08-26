import ServerProvider from '../provider/ServerProvider'

export default class ServerProviderFactory {
  static readonly create = (): ServerProvider => {
    try {
      const serverProvider = new ServerProvider()

      if (!serverProvider) {
        throw new Error('Failed to create ServerProvider')
      }

      return serverProvider
    } catch (error) {
      console.error('Error creating ServerProvider:', error)
      throw error
    }
  }
}
