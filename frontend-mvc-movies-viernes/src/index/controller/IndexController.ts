import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    this.movie = MovieFactory.create(this.view.getMainHTML())
    this.menu = MenuFactory.create(this.view.getMenuHTML())
  }

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent()
    this.movie.initComponent()
    this.menu.initComponent()
  }
}
