import MoviesModel from "../model/MoviesModel.js"
import MoviesView from "../view/MoviesView.js"


export default class MoviesController {
  private model: MoviesModel
  private view: MoviesView

  constructor(model: MoviesModel, view: MoviesView) {
    this.model = model
    this.view = view
  }

  public init(): void {
    this.model.init()
    this.view.init()
  }

  public searchMovies = (search: string): void => {
    this.model.searchMovies(search)
  }
}