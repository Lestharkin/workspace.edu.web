import MovieController from '../controller/MovieController.js'
import MovieModel from '../model/MovieModel.js'
import MovieView from '../view/MovieView.js'

export default class MovieFactory {
  static readonly create = (parent: HTMLElement) => {
    const model = new MovieModel()
    if (!model) {
      throw new Error('MovieModel is undefined')
    }
    const view = new MovieView(parent, model)
    if (!view) {
      throw new Error('MovieView is undefined')
    }
    const controller = new MovieController(model, view)
    if (!controller) {
      throw new Error('MovieController is undefined')
    }
    return controller
  }
}
