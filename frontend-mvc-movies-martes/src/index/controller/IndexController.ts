import MovieController from '../../movie/controller/MovieController.js'
import MovieModel from '../../movie/model/MovieModel.js'
import MovieView from '../../movie/view/MovieView.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    this.movie = new MovieController(
      new MovieModel(),
      new MovieView(this.view.getMainHTML())
    )
  }

  readonly init = () => {
    this.view.render()
  }
}
