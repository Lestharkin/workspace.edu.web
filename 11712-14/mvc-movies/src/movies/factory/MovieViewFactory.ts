import MovieController from '../controllers/MovieController'
import MovieView from '../views/MovieView'

export default class MovieViewFactory {
  static create(movieController: MovieController): MovieView {
    const movieView = new MovieView(movieController)
    if (!movieView) {
      throw new Error('Failed to create MovieView')
    }
    return movieView
  }
}
