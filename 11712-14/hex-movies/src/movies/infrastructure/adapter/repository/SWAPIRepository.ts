import Movie from '../../../domain/model/movie/Movie'
import SWAPIRepositoryPort from '../../../domain/port/driven/repository/swapi/SWAPIRepositoryPort'

export default class SWAPIRepository implements SWAPIRepositoryPort {
  readonly findAll = (): Promise<Movie[]> => {
    return Promise.resolve([Movie.builder().build()])
  }

  readonly findById = (_id: string): Promise<Movie> => {
    return Promise.resolve(Movie.builder().build())
  }
}
