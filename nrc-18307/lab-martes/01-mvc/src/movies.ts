import Server from './express/Server'
import MovieFactory from './movie/factory/MovieFactory'
import UserFactory from './user/factory/UserFactory'

const movieView = MovieFactory.createMovieView()

const userView = UserFactory.createUserView()

const server = new Server(movieView, userView)
server.start()
