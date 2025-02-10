import Server from './express/Server'
import MovieFactory from './movie/factory/MovieFactory'

const movieView = MovieFactory.createMovieView()

const server = new Server(movieView)
server.start()
