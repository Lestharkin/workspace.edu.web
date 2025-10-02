import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'

export default class MovieView extends Observer<MovieModel> {
  constructor(private readonly parent: HTMLElement, MovieModel: MovieModel) {
    super(MovieModel)
  }

  override readonly update = () => {
    console.log('MovieView update')
  }

  readonly initComponent = () => {
    this.parent.innerHTML += MovieTemplate.getMoviesHTML()
  }
}
