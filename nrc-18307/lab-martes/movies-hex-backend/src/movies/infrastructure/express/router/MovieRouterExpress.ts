import { Router } from 'express'
import MovieRouterExpressInterface from '../../../domain/interfaces/MovieRouterExpressInterface'
import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'

export default class MovieRouterExpress implements MovieRouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly controller: MovieControllerExpressInterface) {
    this.router = Router()
    this.path = '/movies'
    this.routes()
  }

  public routes(): void {
    this.getMovies()
  }

  public getMovies(): void {
    this.router.get(`/`, this.controller.getMovies.bind(this.controller))
  }

  public getMovieById(): void {
    this.router.get(`/:id`, this.controller.getMovieById.bind(this.controller))
  }
}
