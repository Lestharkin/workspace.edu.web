import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly body: HTMLElement

  constructor(MovieModel: MovieModel) {
    super(MovieModel)
    this.body = document.body
  }

  override readonly update = () => {
    console.log('MovieView update')
  }

  readonly initComponent = () => {
    this.body.innerHTML += `<h1>Hello, World!</h1>`
  }
}
