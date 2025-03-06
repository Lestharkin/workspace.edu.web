import { SWAPIInterface } from '../../../../swapi/domain/SWAPIInterface'
import Movie from '../../../domain/movie/Movie'
import NullMovie from '../../../domain/movie/NullMovie'
import SWMovieRepositoryPort from '../../../domain/port/driven/SWMovieRepositoryPort'

export default class SWMovieRepository implements SWMovieRepositoryPort {
  constructor(private readonly swapi: SWAPIInterface) {}

  public findAll = (): Promise<Movie[]> => {
    const films = this.swapi.fetchSWMovies()

    if (films === undefined || films === null) {
      return Promise.resolve([])
    }

    // ---------------------

    return Promise.resolve([])
  }

  public findById = (_id: string): Promise<Movie> =>
    Promise.resolve(new NullMovie())

  public save = (_item: Movie): Promise<Movie> =>
    Promise.resolve(new NullMovie())

  public update = (_id: string, _item: Movie): Promise<boolean | Movie> =>
    Promise.resolve(false)

  public patch = (
    _id: string,
    _item: Partial<Movie>
  ): Promise<boolean | Movie> => Promise.resolve(false)

  public delete = (_id: string): Promise<boolean> => Promise.resolve(false)
}
