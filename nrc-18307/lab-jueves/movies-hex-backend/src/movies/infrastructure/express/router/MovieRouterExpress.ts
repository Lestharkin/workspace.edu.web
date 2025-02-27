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
    this.path = '/movies/v1.0'
    this.routes()
  }

  public routes = (): void => {
    this.configureMovies()
    this.configureMovieById()
  }

  public configureMovies = (): void => {
    this.router.get('/movies', this.movieController.getMovies.bind(this.movieController))  
  }

  public configureMovieById = (): void => {
    this.router.get('/movie/:id', this.movieController.getMovieById.bind(this.movieController)) 
  }
}
