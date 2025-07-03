import SWAPIInterface from '../../../../swapi/domain/SWAPIInterface'
import Movie from '../../../domain/movie/Movie'
import NullMovie from '../../../domain/movie/NullMovie'
import SWMovieRepositoryPort from '../../../domain/port/driven/SWMovieRepositoryPort'
import FilmsToMovies from './FilmsToMovies'

export default class SWMovieRepository implements SWMovieRepositoryPort {

  constructor(
    private readonly swapi: SWAPIInterface,
    private readonly filmsToMovies: FilmsToMovies
  ) {}

  public findAll = async (): Promise<Movie[]> => {
    const films = await this.swapi.fetchSWMovies()

    if(films === undefined || films === null) {
      return []
    }
    
    const movies = await this.filmsToMovies.get(films)
    
    if(movies === undefined && movies === null) {
      return []
    }
    return movies
  }

  public findById = (_id: string): Promise<Movie> => {
    // TODO: Implement this method
    return Promise.resolve(new NullMovie())
  }

  public save = (_item: Movie):  Promise<Movie> => {
    // TODO: Implement this method
    return Promise.resolve(new NullMovie())
  }

  public update = (_id: string, _item: Movie):  Promise<boolean | Movie> => {
    // TODO: Implement this method
    return Promise.resolve(false)
  }

  public patch = (_id: string, _item: Partial<Movie>):  Promise<boolean | Movie> => {
    // TODO: Implement this method
    return Promise.resolve(new NullMovie())
  }

  public delete = (_id: string): Promise<boolean> => {
    // TODO: Implement this method
    return Promise.resolve(false)
  }

  public getSWMovieByTitle = (_title: string): Promise<Movie> => {
    // TODO: Implement this method
    return Promise.resolve(new NullMovie())
  }
}
