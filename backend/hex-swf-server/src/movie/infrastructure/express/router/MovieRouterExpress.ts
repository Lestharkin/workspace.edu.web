import { Router } from 'express'
import MovieControllerExpressPort from '../../../domain/port/driver/MovieControllerExpressPort'
import MovieRouterExpressPort from '../../../domain/port/driver/MovieRouterExpressPort'

export default class MovieRouterExpress implements MovieRouterExpressPort {
  router: Router

  constructor(private readonly movieController: MovieControllerExpressPort) {
    this.router = Router()
    this.routes()
  }

  public routes = (): void => {
    this.getMovies()
  }

  public getMovies = (): void => {
    this.router.get(
      '/movies',
      this.movieController.movies.bind(this.movieController)
    )
  }
}
