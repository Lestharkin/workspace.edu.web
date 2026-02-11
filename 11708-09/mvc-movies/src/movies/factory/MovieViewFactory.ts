import MovieController from '../controllers/MovieController'
import MovieView from '../views/MovieView'

export default class MovieViewFactory {
  static readonly create = (movieController: MovieController): MovieView => {
    const View = new MovieView(movieController)
    if (!View) {
      throw new Error('MovieViewFactory: Failed to create MovieView instance')
    }
    return View
  }
}
