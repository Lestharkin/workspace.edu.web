import ServerFactory from './express/infrastructure/factory/ServerFactory'
import MovieRouterFactory from './movies/infrastructure/factory/MovieRouterFactory'

const moviesRouter = MovieRouterFactory.create()

const server = ServerFactory.create([moviesRouter])
server.start()
