import MoviesModel from '../model/MoviesModel.js'
import MoviesView from '../view/MoviesView.js'

export default class MoviesController {
  constructor(
    private readonly model: MoviesModel,
    private readonly view: MoviesView
  ) {}

  readonly init = () => {
    console.log('MoviesController initialized')
    this.model.init()
    this.view.init()
    this.view.render()
  }
}
