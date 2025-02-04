import Server from './express/server'
import MovieController from './movies/controller/MovieController'
import MovieModel from './movies/model/MovieModel'
import MovieView from './movies/view/MovieView'

const movieView = new MovieView(new MovieController(new MovieModel()))

const server = new Server(movieView)
server.start()