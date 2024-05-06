import ClientController from './client/infrastructure/express/controller/ClientController'
import ClientRouter from './client/infrastructure/express/route/ClientRouter'
import Express from './express/Express'
import MovieFactory from './movie/infrastructure/factory/MovieFactory'

const movieFactory = new MovieFactory()
const movieRouter = movieFactory.createRouter()
const swfApp = new Express([
  movieRouter,
  new ClientRouter(new ClientController())
])
swfApp.start()