import MoviesModel from '../model/MoviesModel.js'
import MoviesView from '../view/MoviesView.js'

export default class MoviesController {
  constructor(
    private readonly model: MoviesModel,
    private readonly view: MoviesView
  ) {}

  readonly init = async (): Promise<void> => {
    console.log('MoviesController initialized')
    await this.model.init()
    this.view.init()
    this.view.render()
  }
}
