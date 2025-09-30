import Movie from '../types/Movie'

export default class MovieModel {
  private movies: Movie[]

  constructor() {
    this.movies = []
  }

  readonly getMovies = async (): Promise<Movie[]> => {
    const data = await fetch('./movies-2020s.json')
    this.movies = await data.json()
    return this.movies
  }

  readonly init = async () => {
    await this.getMovies()
  }
}
