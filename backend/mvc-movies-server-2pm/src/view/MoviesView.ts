import { Router } from 'express'
import MoviesController from '../controller/MoviesController'

export default class MoviesView {
  private router: Router

  constructor(
    private readonly moviesController: MoviesController
  ) {
    this.router = Router()
  }

  public routes = (): void => {
    this.router.get(
      '/v1.0/movies',
      this.moviesController.getMovies.bind(this.moviesController)
    )
  }
}
