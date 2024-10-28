import MovieControllerExpressPort from '../../../domain/port/driver/MovieControllerExpressPort'
import MovieRouterExpressPort from '../../../domain/port/driver/MovieRouterExpressPort'
import RouterExpress from '../../../../express/domain/RouterExpress'

export default class MovieRouterExpress extends RouterExpress implements MovieRouterExpressPort {
  constructor(private readonly movieController: MovieControllerExpressPort) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getMovies()
  }

  public getMovies = (): void => {
    this.router.get(
      '/v1.0/movie/movies',
      this.movieController.movies.bind(this.movieController)
    )
  }
}
