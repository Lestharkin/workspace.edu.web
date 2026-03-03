import Movie from '../../../domain/model/movie/Movie'
import SWAPIRepositoryPort from '../../../domain/port/driven/repository/SWAPIRepositoryPort'

export default class SWAPIRepository implements SWAPIRepositoryPort {
  readonly findByTitle = (_title: string): Promise<Movie> => {
    return Promise.resolve(Movie.Builder().build())
  }
  readonly findAll = (): Promise<Movie[]> => {
    return Promise.resolve([])
  }
  readonly findById = (_id: string): Promise<Movie> => {
    return Promise.resolve(Movie.Builder().build())
  }
}
