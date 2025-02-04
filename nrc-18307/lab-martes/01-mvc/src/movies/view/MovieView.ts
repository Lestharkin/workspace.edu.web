import { Router } from 'express'
import MovieController from '../controller/MovieController'

export default class MovieView {
  router: Router

  constructor(private readonly controller: MovieController) {
    this.router = Router()
    this.routes()
  }

  public routes(): void {
    this.router.get(
      '/api/v1.0/movies/movies',
      this.controller.getMovies.bind(this.controller)
    )
  }
}
