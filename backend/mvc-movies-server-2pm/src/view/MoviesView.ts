import { Router } from 'express'
import MoviesController from '../controller/MoviesController'

export default class MoviesView {
  router: Router

  constructor(private readonly moviesController: MoviesController) {
    this.router = Router()
    this.routes()
  }

  public routes = (): void => {
    this.router.get(
      '/v1.0/movies',
      this.moviesController.getMovies.bind(this.moviesController)
    )
  }
}
