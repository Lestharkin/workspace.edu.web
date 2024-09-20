import MoviesController from "./controller/MoviesController"
import MoviesModel from "./model/MoviesModel"
import MoviesView from "./view/MoviesView"

export default class Movies {
  public static readonly createView = (): MoviesView => {
    const model = new MoviesModel()
    const controller = new MoviesController(model)
    return new MoviesView(controller)
  }
}