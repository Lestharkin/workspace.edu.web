import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly movieTemplate: MovieTemplate

  constructor(private readonly parent: HTMLElement, MovieModel: MovieModel) {
    super(MovieModel)
    this.movieTemplate = new MovieTemplate(
      (this.subject as MovieModel).getMovies()
    )
  }

  override readonly update = () => {
    this.render()
  }

  readonly initComponent = () => {}

  readonly render = () => {
    this.movieTemplate.setMovies((this.subject as MovieModel).getMovies())
    this.parent.innerHTML += this.movieTemplate.getMoviesHTML()
  }
}
