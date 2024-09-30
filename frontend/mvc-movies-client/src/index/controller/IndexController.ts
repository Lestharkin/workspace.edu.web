import Contact from '../../contact/Contact.js'
import ContactController from '../../contact/controller/ContactController.js'
import ErrorController from '../../error/controller/ErrorController.js'
import Error404 from '../../error/Error404.js'
import MenuController from '../../menu/controller/MenuController.js'
import Menu from '../../menu/Menu.js'
import MoviesController from '../../movies/controller/MoviesController.js'
import Movies from '../../movies/Movies.js'
import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly menu: MenuController
  private readonly movies: MoviesController
  private readonly error: ErrorController
  private readonly contact: ContactController

  constructor(
    private readonly indexModel: IndexModel,
    private readonly indexView: IndexView,
  ) {
    this.movies = Movies.create()
    this.menu = Menu.create()
    this.error = Error404.create()
    this.contact = Contact.create()
  }

  public init = async (): Promise<void> => {
    this.indexModel.init()
    this.loadMain(this.indexView.getPageFromMeta())
    this.indexView.init(this.searchMovies)
  }

  public searchMovies = (search: string): void => {
    this.movies.searchMovies(search)
  }

  public loadMain = async (component: string): Promise<void> => {
    this.menu.init()
    this.indexView.renderMain(component ?? 'error')
    switch (component) {
      case 'movies':
        this.loadMovies()
        break
      case 'contact':
        this.loadContact()
        break
      default:
        this.loadError()
    }
  }

  public loadMovies = async (): Promise<void> => {
    this.movies.init()
  }

  public loadContact = async (): Promise<void> => {
    this.contact.init()
  }

  public loadError = async (): Promise<void> => {
    this.error.init()
  }
}   
