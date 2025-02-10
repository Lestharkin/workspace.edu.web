import { Router } from 'express'
import MovieController from '../controller/MovieController'

export default class MovieView {
  public router: Router

  constructor(private readonly movieController: MovieController) {
    this.router = Router()
    this.routes()
  }

  public routes() {
    this.router.get(
      '/api/v1.0/movies/movies',
      this.movieController.getMovies.bind(this.movieController)
    )
  }
}
