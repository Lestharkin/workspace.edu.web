import MovieModel from '../model/MovieModel.js'
import MovieView from '../view/MovieView.js'

export default class MovieController {
  constructor(
    private readonly model: MovieModel,
    private readonly view: MovieView
  ) {
    console.log('MovieController')
  }

  readonly initComponent = async () => {
    await this.model.initComponent()
    this.view.initComponent()
  }
}
