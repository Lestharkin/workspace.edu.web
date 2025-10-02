import MovieController from '../../movie/controller/MovieController.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    console.log('IndexController')
  }

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent()
    console.log('IndexController initComponent')
  }
}
