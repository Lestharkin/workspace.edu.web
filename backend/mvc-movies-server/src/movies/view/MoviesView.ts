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
      '/movies',
      this.moviesController.getMovies.bind(this.moviesController)
    )

    this.router.get(
      '/movies/movie/image/:id',
      this.moviesController.getMovieImage.bind(this.moviesController)
    )
  }
}
