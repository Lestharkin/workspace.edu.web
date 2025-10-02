import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly body: HTMLElement
  private readonly main: HTMLElement

  constructor(MovieModel: MovieModel) {
    super(MovieModel)
    this.body = document.body
    this.main = this.body.querySelector('main') as HTMLElement
  }

  override readonly update = () => {
    console.log('MovieView update')
  }

  readonly initComponent = () => {
    this.main.innerHTML += `<h1>Hello, World!</h1>`
  }
}
