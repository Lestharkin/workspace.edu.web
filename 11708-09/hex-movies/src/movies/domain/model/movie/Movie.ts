import AbstractMovie from './AbstractMovie'
import MovieBuilder from './MovieBuilder'

export default class Movie extends AbstractMovie {
  override readonly isNull = (): boolean => false
  static readonly Builder = (): MovieBuilder => new MovieBuilder()
}
