import Subject from '../../shared/Observer/Subject.js'
import MovieView from '../view/MovieView.js'

export default class MovieModel extends Subject<MovieView> {
  private readonly movies: Movies[]

  constructor() {
    super()
  }

  readonly initComponent = () => {
    console.log('MovieModel initComponent')
  }
}
