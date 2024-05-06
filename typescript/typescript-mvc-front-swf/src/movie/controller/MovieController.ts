import MovieView from '../view/MovieView'

export default class MovieController {
  constructor(private readonly movieView: MovieView) {}

  public init = async (): Promise<void> => {
    await this.movieView.render()
  }
}
