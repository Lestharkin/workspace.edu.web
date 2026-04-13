import Observer from '../../shared/observer/Observer.js'
import type IndexModel from '../model/IndexModel.js'

export default class IndexView extends Observer {
  private readonly root: HTMLElement

  private readonly nav = `<nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
          aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>`

  constructor(model: IndexModel) {
    super(model)
    this.root = document.querySelector('root') ?? document.createElement('div')
  }

  readonly init = () => {
    this.root.innerHTML = this.nav
  }

  readonly update = () => {
    const movies = (this.subjects as IndexModel).getMovies()

    const list = document.createElement('div')
    list.innerHTML = `
    <ul class="list-group">
      ${movies
        .map(
          (movie) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${movie.title}
          <span class="badge bg-primary rounded-pill">${movie.episode_id}</span>
        </li>
      `,
        )
        .join('')}
    </ul>
    `
    this.root.appendChild(list)
  }
}
