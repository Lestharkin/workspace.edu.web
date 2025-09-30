import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly movie2: MovieController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    this.movie = MovieFactory.create(this.view.getMainHTML())
    this.movie2 = MovieFactory.create(this.view.getMainHTML())
  }

  readonly init = () => {
    this.model.init()
    this.movie.init()
    this.movie2.init()
    this.view.render()
  }
}
