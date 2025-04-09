import MoviesController from './controller/MoviesController.js'
import MoviesModel from './model/MoviesModel.js'
import MoviesView from './view/MoviesView.js'

export default class Movies {
  private readonly moviesController: MoviesController
  private readonly MoviesModel: MoviesModel
  private readonly MoviesView: MoviesView

  constructor() {
    this.MoviesModel = new MoviesModel()
    this.MoviesView = new MoviesView()
    this.moviesController = new MoviesController(
      this.MoviesModel,
      this.MoviesView
    )
  }

  readonly init = () => {
    this.moviesController.init()
  }

  readonly getMoviesHTML = () => {
    return this.MoviesView.getMoviesHTML()
  }
}
