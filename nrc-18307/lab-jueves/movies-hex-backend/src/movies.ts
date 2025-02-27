import ServerFactory from './express/infrastructure/factory/ServerFactory'
import MovieRouterFactory from './movies/infrastructure/express/factory/MovieRouterFactory'

const movieRouter = MovieRouterFactory.create()

const routes = [movieRouter]

const server = ServerFactory.create(routes)
server.start()
