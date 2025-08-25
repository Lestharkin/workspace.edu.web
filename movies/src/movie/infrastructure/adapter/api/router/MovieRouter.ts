import MovieAbstractRouter from '../../../../domain/api/MovieAbstractRouter'
import MovieController from '../controller/MovieController'
import MovieRecorderController from '../controller/MovieRecorderController'
import MovieSeekerController from '../controller/MovieSeekerController'

export default class MovieRouter extends MovieAbstractRouter {
  constructor(
    private readonly movieController: MovieController,
    private readonly movieSeekerController: MovieSeekerController,
    private readonly movieRecorderController: MovieRecorderController
  ) {
    super('/movies')
  }

  protected override routes = (): void => {
    this.movie()
    this.list()
  }

  private readonly movie = () => {
    this.router.get('/movie/:id', this.movieController.getById)
    this.router.post('/movie', this.movieRecorderController.register)
  }

  private readonly list = () => {
    this.router.get('/list/:idList', this.movieController.getByIdList)
    this.router.get('/list/', this.movieSeekerController.search)
  }
}
