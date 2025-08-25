import MovieFilter from '../../domain/interfaces/MovieFilter'
import Movie from '../../domain/model/Movie/Movie'
import NullMovie from '../../domain/model/Movie/NullMovie'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {
  // TODO: implement
  register = async (_movie: Movie): Promise<Movie> => {
    return Promise.resolve(new NullMovie())
  }

  // TODO: implement
  search = async (_filter: MovieFilter): Promise<Movie[]> => {
    return Promise.resolve([new NullMovie()])
  }

  // TODO: implement
  getById = async (_id: string): Promise<Movie> => {
    return Promise.resolve(new NullMovie())
  }

  // TODO: implement
  getByIdList = async (_list: string[]): Promise<Movie[]> => {
    return Promise.resolve([new NullMovie()])
  }
}
