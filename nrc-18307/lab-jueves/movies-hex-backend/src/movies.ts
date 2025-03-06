import ServerFactory from './express/infrastructure/factory/ServerFactory'
import MovieRouterFactory from './movies/infrastructure/factory/MovieRouterFactory'

const moviesRouter = MovieRouterFactory.create()

const routers = [moviesRouter]

const server = ServerFactory.create(routers)
server.start()
