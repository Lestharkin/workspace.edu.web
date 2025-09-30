import Subject from '../../shared/Observer/Subject.js'
import Movie from '../types/Movie.js'
import MovieView from '../view/MovieView.js'

export default class MovieModel extends Subject<MovieView> {
  private movies: Movie[]

  constructor() {
    super()
    this.movies = []
  }

  readonly getMovies = async (): Promise<Movie[]> => {
    const data = await fetch('./movies-2020s.json')
    this.movies = await data.json()
    return this.movies
  }

  readonly init = async (): Promise<void> => {
    await this.getMovies()
  }
}
