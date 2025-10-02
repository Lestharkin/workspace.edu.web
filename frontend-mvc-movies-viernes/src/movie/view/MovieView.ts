import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'

export default class MovieView extends Observer<MovieModel> {
  constructor(private readonly parent: HTMLElement, MovieModel: MovieModel) {
    super(MovieModel)
  }

  override readonly update = () => {
    console.log('MovieView update')
  }

  readonly initComponent = () => {
    this.parent.innerHTML += `<h1>Movies</h1>`
  }
}
