import MovieTemplate from '../template/MovieTemplate.js'

export default class MovieView {
  private readonly movie: HTMLElement

  constructor(private readonly parent: HTMLElement) {
    this.movie = document.createElement('movie')
    this.parent.appendChild(this.movie)
  }

  readonly render = () => {
    this.movie.innerHTML = MovieTemplate.render()
  }
}
