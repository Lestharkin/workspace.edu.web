import { MovieFilter } from '../../domain/model/Movie/MovieFilter'
import Movie from '../../domain/model/Movie/Movie'
import NullMovie from '../../domain/model/Movie/NullMovie'
import MovieUseCasePort from '../../domain/port/driver/usecase/MovieUseCasePort'
import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'

export default class MovieUseCase implements MovieUseCasePort {
  constructor(private readonly movieService: MovieServiceInterface) {}

  // TODO: implement
  readonly register = (_movie: Movie): Promise<Movie> => {
    return Promise.resolve(new NullMovie())
  }

  // TODO: implement
  readonly search = async (filter: MovieFilter): Promise<Movie[]> => {
    const title = filter.title ?? ''

    const movies = await this.movieService.findByTitle(title)

    return movies
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
