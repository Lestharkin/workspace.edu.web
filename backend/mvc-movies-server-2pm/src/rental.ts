import Server from './express/Server'
import Movies from './movies/Movies'

const moviesView = Movies.createView()

const server = new Server(moviesView)
server.start()
