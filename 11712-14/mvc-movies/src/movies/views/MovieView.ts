import { Router } from 'express'
import type MovieController from '../controllers/MovieController'

export default class MovieView {
  router: Router

  constructor(private readonly controller: MovieController) {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/api/v1.0/movies/list', this.controller.getMovieList)
    this.router.get('/api/v1.0/movies/id', this.controller.getMovie)
    this.router.get(
      '/api/v1.0/movies/movie/image/id',
      this.controller.getMovieImage,
    )

    this.router.get(
      '/api/v2.5/movies/movie/image/id',
      this.controller.getMovieImage,
    )
  }
}
