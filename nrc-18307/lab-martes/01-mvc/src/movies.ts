import Server from './express/server'
import MovieController from './movies/controller/MovieController'
import MovieView from './movies/view/MovieView'

const movieView = new MovieView(new MovieController())

const server = new Server(movieView)
server.start()