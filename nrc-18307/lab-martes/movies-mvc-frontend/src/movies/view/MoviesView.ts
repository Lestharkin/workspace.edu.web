export default class MoviesView {
  private movies: HTMLElement

  constructor() {
    console.log('MoviesView initialized')
    this.movies = document.createElement('div')
  }

  init = (movies: HTMLElement) => {
    this.movies = movies
  }

  render() {
    console.log(this.movies)
    this.movies.innerHTML = `
      <h1>Movies</h1>
      <p>Welcome to the Movies page!</p>
      `
  }
}
