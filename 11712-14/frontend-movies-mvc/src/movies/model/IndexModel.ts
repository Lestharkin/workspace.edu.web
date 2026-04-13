import Subject from '../../shared/observer/Subject.js'
import type { StarWarsMovie } from './types/StarWarsMovie.js'

export default class IndexModel extends Subject {
  private movies: StarWarsMovie[]

  constructor() {
    super()
    this.movies = []
  }

  readonly init = async () => {
    this.movies = await this.fetchMovies()
    this.notify()
  }

  readonly getMovies = () => this.movies

  readonly fetchMovies = async (): Promise<StarWarsMovie[]> => {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()
    this.movies = data.results
    return this.movies
  }
}
