import MoviesController from './controller/MoviesController.js'
import MoviesModel from './model/MoviesModel.js'
import MoviesView from './view/MoviesView.js'

export default class Movies {
  private readonly controller: MoviesController
  private readonly model: MoviesModel
  private readonly view: MoviesView

  constructor() {
    this.model = new MoviesModel()
    this.view = new MoviesView()
    this.controller = new MoviesController(this.model, this.view)
  }

  readonly init = async () => {
    console.log('Movies initialized')
    await this.controller.init()
  }

  readonly getMoviesHTML = () => {
    return this.view.getMoviesHTML()
  }
}
