import ErrorController from '../../error/controller/ErrorController.js'
import Error404 from '../../error/Error404.js'
import MenuController from '../../menu/controller/MenuController.js'
import Menu from '../../menu/Menu.js'
import MoviesController from '../../movies/controller/MoviesController.js'
import Movies from '../../movies/Movies.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private menu: MenuController
  private movies: MoviesController
  private error: ErrorController

  constructor(
    private readonly indexModel: IndexModel,
    private readonly indexView: IndexView
  ) {
    this.movies = Movies.create()
    this.menu = Menu.create()
    this.error = Error404.create()
  }

  public init = async (): Promise<void> => {
    this.indexView.renderMain("error")
    this.menu.init()
    this.movies.init()
    this.error.init()
    this.indexModel.init()
    this.indexView.init(this.searchMovies)
  }

  public searchMovies = (search: string): void => {
    this.movies.searchMovies(search)
  }
}
