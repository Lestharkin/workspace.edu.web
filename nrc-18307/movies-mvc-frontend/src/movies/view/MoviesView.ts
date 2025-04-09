import Observer from '../../shared/types/Observer.js'
import MoviesModel from '../model/MoviesModel.js'

export default class MoviesView extends Observer<MoviesModel> {
  private readonly moviesHTML: HTMLElement

  constructor(moviesModel: MoviesModel) {
    super(moviesModel)
    this.moviesHTML = document.createElement('movies')
  }

  readonly init = (): void => {
    console.log('MoviesView initialized')
  }

  readonly update = (): void => {
    this.render()
  }

  readonly render = (): void => {
    const moviesData = (this.subject as MoviesModel).getMoviesData()
    moviesData.forEach((movie) => {
      const div = document.createElement('div')
      div.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.extract}</p>
        <img src="./img/movies/${movie.thumbnail}" alt="${movie.title}">
      `
      this.moviesHTML.appendChild(div)
    })
  }

  readonly getMoviesHTML = (): HTMLElement => {
    return this.moviesHTML
  }
}
