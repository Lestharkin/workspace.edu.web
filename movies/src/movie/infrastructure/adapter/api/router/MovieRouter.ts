import AbstractMovieRouter from '../../../../domain/api/AbstractMovieRouter'
import MovieController from '../controller/MovieController'
import MovieRecorderController from '../controller/MovieRecorderController'
import MovieSeekerController from '../controller/MovieSeekerController'

export default class MovieRouter extends AbstractMovieRouter {
  constructor(
    private readonly movieController: MovieController,
    private readonly movieSeekerController: MovieSeekerController,
    private readonly movieRecorderController: MovieRecorderController
  ) {
    super('/movies-data')
    this.routes()
  }

  protected override routes = (): void => {
    this.movieRoutes()
    this.listRoutes()
  }

  private readonly movieRoutes = (): void => {
    this.router.get('/movie/:id', this.movieController.getById)
    this.router.post('/movie', this.movieRecorderController.create)
  }

  private readonly listRoutes = (): void => {
    this.router.get('/list/:idList', this.movieController.getByIdList)
    this.router.get('/list/', this.movieSeekerController.search)
  }
}
