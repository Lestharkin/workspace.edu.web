import Movie, { MovieInterface } from '../../domain/model/Movie/Movie'
import NullMovie from '../../domain/model/Movie/NullMovie'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {
  // TODO: implement
  readonly register = (_movie: Movie): Promise<Movie> => {
    return Promise.resolve(new NullMovie())
  }

  // TODO: implement
  readonly search = (_filter: MovieInterface): Promise<Movie[]> => {
    return Promise.resolve([new NullMovie()])
  }

  // TODO: implement
  readonly getById = (_id: string): Promise<Movie> => {
    return Promise.resolve(new NullMovie())
  }

  // TODO: implement
  readonly getByIdList = (_list: string[]): Promise<Movie[]> => {
    return Promise.resolve([new NullMovie()])
  }
}
