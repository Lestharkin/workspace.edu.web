import Observer from '../../shared/observer/Observer.js'
import Subject from '../../shared/observer/Subject.js'
import IndexModel from '../model/IndexModel.js'
import HeaderComponent from './component/HeaderComponent.js'
import LayoutComponent from './component/LayoutComponent.js'

export default class IndexView extends Observer {
  private readonly root: HTMLDivElement
  private readonly layout: LayoutComponent
  private readonly header: HeaderComponent

  constructor(subject: Subject) {
    super(subject)
    this.root = document.querySelector('root') ?? document.createElement('div')
    this.header = new HeaderComponent()
    this.layout = new LayoutComponent(
      this.header.get(() => {
        alert('Search button clicked')
      }),
      this.root,
    )
  }

  readonly init = () => {
    this.layout.get()
  }

  readonly update = () => {
    const movies = (this.subject as IndexModel).getMovies()

    const div = document.createElement('div')
    const list = `
    <ul class="list-group">
      ${movies
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
    div.innerHTML = list
    this.root.appendChild(div)
  }
}
