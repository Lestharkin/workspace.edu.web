import MovieService from '../../application/service/MovieService'
import MovieUseCase from '../../application/usecase/MovieUseCase'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'
import SWRepositoryFactory from './SWRepositoryFactory'

export default class MovieUseCaseFactory {
  public static create(): MovieUseCasePort {
    const swMovieRepository = SWRepositoryFactory.create()
    const movieService = new MovieService(swMovieRepository)
    return new MovieUseCase(movieService)
  }
}
