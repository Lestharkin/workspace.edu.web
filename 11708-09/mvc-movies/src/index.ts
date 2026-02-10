import MovieControllerFactory from './movies/factory/MovieControllerFactory'
import MovieViewFactory from './movies/factory/MovieViewFactory'
import Server from './server/Server'

try {
  const moviesRouter = MovieViewFactory.create(MovieControllerFactory.create())

  const server = new Server([moviesRouter])
  server.start()
} catch (error) {
  console.error('Error starting server:', error)
}
