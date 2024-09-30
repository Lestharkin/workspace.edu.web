import Environment from '../../shared/Environment.js'
import Movie from '../types/Movie.js'
import Subject from '../types/Subject.js'
import MoviesView from '../view/MoviesView.js'

export default class MoviesModel extends Subject<MoviesView> {
  private movies: Movie[]
  private data: Movie[]
  private search: Movie[]
  private page: number
  private limit: number

  constructor() {
    super()
    this.movies = []
    this.data = []
    this.search = []
    this.page = 1
    this.limit = 10
  }

  public init = async (): Promise<void> => {
    this.data = await this.getMoviesFromFile()
    this.setMoviesByPage(this.page)
  }

  public getMovies = (): Movie[] => {
    return this.movies
  }

  public getPage = (): number => {
    return this.page
  }

  public getTotalPages = (): number => {
    return this.search.length > 0
    ? Math.floor(this.search.length / this.limit)
    : Math.floor(this.data.length / this.limit)
  }

  public getMoviesFromFile = async (): Promise<Movie[]> => {
    const response = await fetch(await Environment.getEndpointMovies())
    if (response.status !== 200) {
      return []
    }
    return await response.json()
  }

  public searchMovies = (search: string): void => {
    if (search === '') {
      this.search = []
    } else {
      this.search = this.searchMoviesByAll(search)
    }
    this.page = 1
    this.setMoviesByPage(this.page)
  }

  private searchMoviesByAll = (search: string): Movie[] => {
    search = search.toLowerCase().trim()
    return this.data.filter(
      (movie) =>
        (movie.title ?? '').toLowerCase().includes(search) ||
        (movie.extract ?? '').toLowerCase().includes(search) ||
        String(movie.year).includes(search) ||
        (movie.genres ?? []).join(', ').toLowerCase().includes(search)
    )
  }

  public setMoviesByPage = (page: number): void => {
    const start = (page - 1) * this.limit
    const end = page * this.limit
    this.movies =
      this.search.length > 0
        ? this.search.slice(start, end)
        : this.data.slice(start, end)
    this.notifyAllObservers()
  }

  public setLimit = (limit: number): void => {
    this.limit = limit
    this.setMoviesByPage(this.page)
  }

  public nextPage = (): void => {
    if (this.page < this.data.length / this.limit) {
      this.page++
      this.setMoviesByPage(this.page)
    }
  }

  public previousPage = (): void => {
    if (this.page > 1) {
      this.page--
      this.setMoviesByPage(this.page)
    }
  }
}
