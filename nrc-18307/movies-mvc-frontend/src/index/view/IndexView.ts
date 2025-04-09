export default class IndexView {
  private readonly movies: HTMLElement

  constructor() {
    console.log('IndexView initialized')
    const movies = document.querySelector('movies') as HTMLElement
    if (!movies) {
      this.movies = document.createElement('movies')
    }
    this.movies = movies
  }

  readonly getMovies = () => {
    return this.movies
  }

  render() {
    console.log('Rendering Index View')
  }
}
