import Server from './api/infrastructure/adapter/express/Server'
import EnvironmentProvider from './api/infrastructure/provider/EnvironmentProvider'
import ErrorRouter from './error/infrastructure/adapter/api/ErrorRouter'
import MovieFactory from './movies/infrastructure/factory/MoviesFactory'

try {
  const provider = EnvironmentProvider.getInstance()

  const movieRouter = MovieFactory.create()

  const errorRouter = new ErrorRouter()

  const server = new Server(provider, [movieRouter, errorRouter])
  server.start()
} catch (error) {
  console.error('Error starting the server:', error)
}
