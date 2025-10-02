import MovieController from '../controller/MovieController.js'
import MovieModel from '../model/MovieModel.js'
import MovieView from '../view/MovieView.js'

export default class MovieFactory {
  static readonly create = (parent: HTMLElement): MovieController => {
    const model = new MovieModel()
    if (!model) {
      throw new Error('MovieModel not found')
    }
    const view = new MovieView(parent, model)
    if (!view) {
      throw new Error('MovieView not found')
    }
    const controller = new MovieController(model, view)
    if (!controller) {
      throw new Error('MovieController not found')
    }
    return controller
  }
}
