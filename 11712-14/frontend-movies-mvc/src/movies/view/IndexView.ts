import Observer from '../../shared/observer/Observer.js'
import IndexModel from '../model/IndexModel.js'
import FooterComponent from './components/FooterComponent.js'
import LayoutComponent from './components/LayoutComponent.js'
import MovieListComponent from './components/MovieListComponent.js'
import NavBarComponent from './components/NavComponent.js'

export default class IndexView extends Observer {
  private readonly root: HTMLElement
  private readonly layout: LayoutComponent
  private readonly nav: NavBarComponent
  private readonly main: HTMLElement
  private readonly movieList: MovieListComponent
  private readonly footer: FooterComponent

  constructor(model: IndexModel) {
    super(model)
    this.root = document.querySelector('root') ?? document.createElement('div')
    this.nav = new NavBarComponent()
    this.movieList = new MovieListComponent()
    this.main = document.createElement('main')
    this.footer = new FooterComponent()
    this.layout = new LayoutComponent(
      this.nav.get(),
      this.main,
      this.footer.get(),
    )
  }

  readonly init = () => {
    this.root.appendChild(this.layout.getLayoutHTML())
  }

  readonly update = () => {
    const movies = (this.subjects as IndexModel).getMovies()

    this.main.appendChild(
      this.movieList.getListHTML(
        movies.map((movie) => ({
          title: movie.title,
          release: movie.release_date,
          img: '',
        })),
      ),
    )
  }
}
