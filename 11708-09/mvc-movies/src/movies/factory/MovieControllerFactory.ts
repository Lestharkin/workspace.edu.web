import MovieController from '../controllers/MovieController'
import MovieModel from '../models/MovieModel'

export default class MovieControllerFactory {
  static readonly create = (movieModel: MovieModel): MovieController => {
    const controller = new MovieController(movieModel)
    if (!controller) {
      throw new Error(
        'MovieControllerFactory: Failed to create MovieController instance',
      )
    }
    return controller
  }
}
