import type { StarWarsMovie } from './types/StarWarsMovie.js'

export default class IndexModel {
  private readonly movies: StarWarsMovie[]

  constructor() {
    this.movies = []
  }

  readonly init = () => {
    console.log('IndexModel loaded')
  }

  readonly fetchMovies = async (): Promise<StarWarsMovie[]> => {
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      return data.results as StarWarsMovie[]
    } catch (error) {
      console.error('Error fetching movies:', error)
      return []
    }
  }
}
