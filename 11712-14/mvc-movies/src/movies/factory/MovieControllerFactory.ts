import MovieController from '../controllers/MovieController'
import MovieModel from '../models/MovieModel'

export default class MovieControllerFactory {
  static create(movieModel: MovieModel): MovieController {
    const movieController = new MovieController(movieModel)
    if (!movieController) {
      throw new Error('Failed to create MovieController')
    }
    return movieController
  }
}
