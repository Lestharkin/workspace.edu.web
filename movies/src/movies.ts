import ServerFactory from './api/infrastructure/adapter/api/factory/ServerFactory'
import MovieRouterFactory from './movie/infrastructure/adapter/api/factory/MovieRouterFactory'

const movieRouter = MovieRouterFactory.create()

const server = ServerFactory.create([movieRouter])

server.start()
