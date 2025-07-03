import MoviesController from './controller/MoviesController.js'
import MoviesModel from './model/MoviesModel.js'
import MoviesView from './view/MoviesView.js'

export default class Movies {
  private readonly model: MoviesModel
  private readonly view: MoviesView
  private readonly controller: MoviesController

  constructor() {
    this.model = new MoviesModel()
    this.view = new MoviesView()
    this.controller = new MoviesController(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }

  readonly getMoviesHTML = (): HTMLElement => {
    return this.view.getMoviesHTML()
  }
}
