export default class MoviesView {
  private readonly moviesHTML: HTMLElement

  constructor() {
    this.moviesHTML = document.createElement('movies')
  }

  init = () => {
    console.log('MoviesView initialized')
  }

  render() {
    this.moviesHTML.innerHTML = `
      <h1>Movies</h1>
      <p>Welcome to the Movies page!</p>
      `
  }

  readonly getMoviesHTML = () => {
    return this.moviesHTML
  }
}
