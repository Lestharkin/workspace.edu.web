import AbstractMovieRouter from '../../../../domain/api/AbstractMovieRouter'
import MovieController from '../controller/MovieController'

export default class MovieRouter extends AbstractMovieRouter {
  constructor(private readonly movieController: MovieController) {
    super('/movies-data')
    this.routes()
  }

  protected override routes = (): void => {
    this.movieRoutes()
    this.listRoutes()
  }

  private readonly movieRoutes = (): void => {
    this.router.get('/movie/:id', this.movieController.getById)
    this.router.post('/movie', this.movieController.create)
  }

  private readonly listRoutes = (): void => {
    this.router.get('/list/:ids', this.movieController.getByIdList)
    this.router.get('/list/', this.movieController.search)
  }
}
