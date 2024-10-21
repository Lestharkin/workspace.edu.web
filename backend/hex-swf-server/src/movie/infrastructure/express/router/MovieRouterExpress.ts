import { Router } from 'express'
import MovieControllerExpressPort from '../../../domain/port/driver/MovieControllerExpressPort'

export default class MoviesView {
  router: Router

  constructor(private readonly movieController: MovieControllerExpressPort) {
    this.router = Router()
    this.routes()
  }

  public routes = (): void => {
    this.router.get(
      '/movies',
      this.movieController.movies.bind(this.movieController)
    )
  }
}
