import Movie from '../../../domain/model/movie/Movie'
import JSONrepositoryPort from '../../../domain/port/driven/repository/JSONrepositoryPort'

export default class JSONrepository implements JSONrepositoryPort {
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
