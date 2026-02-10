import MovieController from '../controllers/MovieController'

export default class MovieControllerFactory {
  static readonly create = (): MovieController => {
    const controller = new MovieController()
    if (!controller) {
      throw new Error(
        'MovieControllerFactory: Failed to create MovieController instance',
      )
    }
    return controller
  }
}
