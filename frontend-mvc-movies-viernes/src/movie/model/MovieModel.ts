import Subject from '../../shared/Observer/Subject.js'
import Movie from '../types/Movie.js'
import MovieView from '../view/MovieView.js'

export default class MovieModel extends Subject<MovieView> {
  private movies: Movie[]

  constructor() {
    super()
    this.movies = []
  }

  readonly getMovies = (): Movie[] => {
    return this.movies
  }

  readonly fetchMovies = async (): Promise<Movie[]> => {
    const response = await fetch('../database/movies-2020s.json')
    const data = await response.json()
    if (!data) {
      throw new Error('No data found')
    }
    return data as Movie[]
  }

  readonly initComponent = async (): Promise<void> => {
    this.movies = await this.fetchMovies()
    this.notifyAllObservers()
  }
}
