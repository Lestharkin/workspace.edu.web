import MovieController from '../controller/MovieController.js'
import MovieModel from '../model/MovieModel.js'
import MovieView from '../view/MovieView.js'

export default class MovieFactory {
  static readonly create = (parent: HTMLElement): MovieController => {
    const model = new MovieModel()
    if (!model) {
      throw new Error('MovieModel not created')
    }

    const view = new MovieView(parent, model)
    if (!view) {
      throw new Error('MovieView not created')
    }

    const Movie = new MovieController(model, view)
    if (!Movie) {
      throw new Error('MovieController not created')
    }

    return Movie
  }
}
