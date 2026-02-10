import MovieController from '../controllers/MovieController'
import ImageModel from '../models/ImageModel'
import MovieModel from '../models/MovieModel'

export default class MovieControllerFactory {
  static create(
    movieModel: MovieModel,
    imageModel: ImageModel,
  ): MovieController {
    const movieController = new MovieController(movieModel, imageModel)
    if (!movieController) {
      throw new Error('Failed to create MovieController')
    }
    return movieController
  }
}
