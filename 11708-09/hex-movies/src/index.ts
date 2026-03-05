import ServerFactory from './api/infrastructure/adapter/express/ServerFactory'
import ErrorRouter from './error/infrastructure/adapter/api/ErrorRouter'
import MovieFactory from './movies/infrastructure/factory/MovieFactory'

try {
  const moviesRouter = MovieFactory.create()

  const errorRouter = new ErrorRouter()

  const server = ServerFactory.create([moviesRouter, errorRouter])
  server.start()
} catch (error) {
  console.error('Failed to start server:', error)
}
