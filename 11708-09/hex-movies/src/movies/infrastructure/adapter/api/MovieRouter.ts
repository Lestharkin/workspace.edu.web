import ApiRouter from '../../../../api/domain/model/ApiRouter'
import MovieControllerInterface from '../../../domain/api/MovieControllerInterface'

export default class MovieRouter extends ApiRouter {
  constructor(private readonly controller: MovieControllerInterface) {
    super()
    this.routes()
  }

  readonly routes = (): void => {
    this.router.get('/api/v1.0/movies/movie', this.controller.getMovieByTitle)
  }
}
