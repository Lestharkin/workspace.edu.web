import Movie, { MovieInterface } from '../../domain/model/Movie/Movie'
import NullMovie from '../../domain/model/Movie/NullMovie'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {
  // TODO: implement
  register = (_movie: Movie): Movie => {
    return new NullMovie()
  }

  // TODO: implement
  search = (_filter: MovieInterface): Movie[] => {
    return [new NullMovie()]
  }

  // TODO: implement
  getById = (_id: string): Movie => {
    return new NullMovie()
  }

  // TODO: implement
  getByIdList = (_list: string[]): Movie[] => {
    return [new NullMovie()]
  }
}
