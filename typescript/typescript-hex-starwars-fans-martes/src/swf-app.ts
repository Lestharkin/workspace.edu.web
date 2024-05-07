import Express from './express/Express'
import MovieFactory from './movie/infrastructure/factory/MovieFactory'

const movieFactory = new MovieFactory()
const movieRouter = movieFactory.createRouter()
const swfApp = new Express([
  movieRouter
])
swfApp.start()