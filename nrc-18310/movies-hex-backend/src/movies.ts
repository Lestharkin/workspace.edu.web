import ServerFactory from './express/infrastructure/factory/ServerFactory'
import MovieRouterFactory from './movies/infrastructure/factory/MovieRouterFactory'

const movieRouter = MovieRouterFactory.create()

const routers = [movieRouter]

const server = ServerFactory.create(routers)
server.start()
