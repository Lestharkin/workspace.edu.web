import ApiRouter from '../../../../api/domain/model/ApiRouter'
import MovieController from './MovieController'

export default class MovieRouter extends ApiRouter {
  constructor(private readonly controller: MovieController) {
    super()
    this.routes()
  }
  readonly routes = () => {
    this.router.get('/api/1.0/movies/movie/:id', this.controller.getMovieById)
  }
}
