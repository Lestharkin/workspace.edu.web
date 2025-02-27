import { Router } from 'express'
import MovieRouterExpressInterface from '../../../domain/interfaces/MovieRouterExpressInterface'
import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'

export default class MovieRouterExpress implements MovieRouterExpressInterface {
  router: Router
  path: string

  constructor(
    private readonly movieController: MovieControllerExpressInterface
  ) {
    this.router = Router()
    this.path = '/movies'

    this.routes()
  }

  public routes = (): void => {}

  public getMovies() {
    this.router.get('/movies', this.movieController.getMovies.bind(this.movieController))
  }

  public getMovieById() {
    this.router.get('/movie/:id', this.movieController.getMovieById.bind(this.movieController))
  }
}
