import AbstractMovie from './AbstractMovie'
import MovieBuilder from './MovieBuilder'

export default class Movie extends AbstractMovie {
  static readonly Builder = (): MovieBuilder => {
    return new MovieBuilder()
  }
}
