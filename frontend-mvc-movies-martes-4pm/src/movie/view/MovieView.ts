import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly movie: HTMLElement

  constructor(private readonly parent: HTMLElement, movieModel: MovieModel) {
    super(movieModel)
    this.movie = document.createElement('movie')
    this.parent.appendChild(this.movie)
  }

  readonly update = (): void => {
    this.render()
  }

  readonly render = () => {
    this.movie.innerHTML = MovieTemplate.render()
  }
}
