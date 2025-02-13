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
      '/movies',
      this.movieController.getMovies.bind(this.movieController)
    )

    this.router.get(
      '/movie/image/:name',
      this.movieController.getMovieImage.bind(this.movieController)
    )
  
  }
}
