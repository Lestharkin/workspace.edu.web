import ServerFactory from './api/infrastructure/adapter/express/ServerFactory'
import MovieFactory from './movies/infrastructure/factory/MovieFactory'

try {
  const moviesRouter = MovieFactory.create()

  // const ErrorRouter = ErrorFactory.create()

  const server = ServerFactory.create([moviesRouter /*, ErrorRouter */])
  server.start()
} catch (error) {
  console.error('Failed to start server:', error)
}
