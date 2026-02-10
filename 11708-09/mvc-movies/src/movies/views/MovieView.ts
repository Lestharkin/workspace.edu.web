import { Router } from 'express'
import MovieController from '../controllers/MovieController'

export default class MovieView {
  router: Router

  constructor(private readonly movieController: MovieController) {
    this.router = Router()
  }

  readonly routes = () => {
    this.router.get('/api/v1.0/movies/list', this.movieController.getMovieList)
  }
}
