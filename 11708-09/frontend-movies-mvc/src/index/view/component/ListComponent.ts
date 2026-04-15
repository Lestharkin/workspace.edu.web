import type { StarWarsMovie } from '../../model/types/StarWarsMovie.js'

export default class ListComponent {
  private readonly listHTML: HTMLDivElement
  private list: StarWarsMovie[]

  constructor(
    private readonly parent: HTMLDivElement,
    list: StarWarsMovie[],
  ) {
    this.list = list
    this.listHTML = document.createElement('div') as HTMLDivElement
    this.parent.appendChild(this.listHTML)
  }

  readonly setMovies = (movies: StarWarsMovie[]) => {
    this.list = movies
  }

  public get(): void {
    const list = `
    <ul class="list-group">
      ${this.list
        .map(
          (movie) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${movie.title}
          ${movie.release_date}
          <span class="badge bg-primary rounded-pill">${movie.episode_id}</span>
        </li>
      `,
        )
        .join('')}
    </ul>`
    this.listHTML.innerHTML = list
  }

  readonly clear = () => {
    this.listHTML.innerHTML = ''
  }
}
