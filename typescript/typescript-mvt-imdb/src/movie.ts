import MoviesRouter from './router/MovieRouter'
import Express from './express/Express'
import MovieView from './view/MovieView'
import MovieModel from './model/MovieModel'

const server = new Express(
  new MoviesRouter(
    new MovieView(
      new MovieModel()
    )
  )
)

server.start()
