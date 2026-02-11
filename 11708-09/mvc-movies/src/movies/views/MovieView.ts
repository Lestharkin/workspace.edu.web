import MovieController from '../controllers/MovieController'
import AbstractRouter from '../../server/model/AbstractRouter'

export default class MovieView extends AbstractRouter {
  constructor(private readonly movieController: MovieController) {
    super()
    this.routes()
  }

  readonly routes = () => {
    this.router.get('/api/v1.0/movies/list', this.movieController.getMovieList)
    this.router.get(
      '/api/v1.0/movies/movie/:title',
      this.movieController.getMovie,
    )
  }
}
