import Movie from '../../../domain/model/movie/Movie'
import IMDBRepositoryPort from '../../../domain/port/driven/repository/imdb/IMDBRepositoryPort'

export default class IMDBRepository implements IMDBRepositoryPort {
  readonly findAll = (): Promise<Movie[]> => {
    return Promise.resolve([Movie.builder().build()])
  }

  readonly findById = (_id: string): Promise<Movie> => {
    return Promise.resolve(Movie.builder().build())
  }
}
