import MovieController from '../controller/MovieController'
import MovieModel from '../model/MovieModel'
import MovieView from '../view/MovieView'

export default class MovieFactory {
  public static createMovieView(): MovieView {
    const movieModel = new MovieModel()
    const movieController = new MovieController(movieModel)
    return new MovieView(movieController)
  }
}
