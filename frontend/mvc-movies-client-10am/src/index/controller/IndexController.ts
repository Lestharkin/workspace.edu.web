import MenuController from '../../menu/controller/MenuController.js'
import Menu from '../../menu/Menu.js'
import MoviesController from '../../movies/controller/MoviesController.js'
import Movies from '../../movies/Movies.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private menu: MenuController
  private movies: MoviesController

  constructor(
    private readonly indexModel: IndexModel,
    private readonly indexView: IndexView
  ) {
    this.movies = Movies.create()
    this.menu = Menu.create()
  }

  public init = async (): Promise<void> => {
    this.menu.init()
    this.movies.init()
    this.indexModel.init()
    this.indexView.init(this.searchMovies)
  }

  public searchMovies = (search: string): void => {
    this.movies.searchMovies(search)
  }
}   
