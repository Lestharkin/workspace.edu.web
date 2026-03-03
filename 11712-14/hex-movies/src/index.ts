import Server from './api/infrastructure/adapter/express/Server'
import EnvironmentProvider from './api/infrastructure/provider/EnvironmentProvider'
import MovieFactory from './movies/infrastructure/factory/MoviesFactory'

try {
  const provider = EnvironmentProvider.getInstance()

  const movieRouter = MovieFactory.create()

  const server = new Server(provider, [movieRouter])
  server.start()
} catch (error) {
  console.error('Error starting the server:', error)
}
