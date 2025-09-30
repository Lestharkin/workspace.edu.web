import Observer from '../../shared/Observer/Observer.js'
import MovieModel from '../model/MovieModel.js'
import MovieTemplate from '../template/MovieTemplate.js'

export default class MovieView extends Observer<MovieModel> {
  private readonly movie: HTMLElement

  constructor(private readonly parent: HTMLElement, subject: MovieModel) {
    super(subject)
    this.movie = document.createElement('movie')
    this.parent.appendChild(this.movie)
  }

  override readonly update = async () => {
    await this.render()
  }

  readonly render = async (): Promise<void> => {
    const movies = await (this.subject as MovieModel).getMovies()
    const movieTemplate = new MovieTemplate(movies)
    this.movie.innerHTML = movieTemplate.getMoviesGridHTML()
  }
}
