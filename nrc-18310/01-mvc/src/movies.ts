import Server from './express/Server'
import MovieController from './movie/controller/MovieController'
import MovieModel from './movie/model/MovieModel'
import MovieView from './movie/view/MovieView'

const movieModel = new MovieModel()
const movieController = new MovieController(movieModel)
const movieView = new MovieView(movieController)

const server = new Server(movieView)
server.start()
