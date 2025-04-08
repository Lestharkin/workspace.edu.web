import MoviesController from '../../movies/controller/MoviesController.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView,
    private readonly moviesComponent: MoviesController
  ) {}

  readonly init = () => {
    console.log('IndexController initialized')
    this.model.init()
    this.view.render()
    this.moviesComponent.init()
  }
}
