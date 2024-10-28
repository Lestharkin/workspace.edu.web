import Movie from '../../domain/model/movie/Movie'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'

export default class MovieUsecase implements MovieUseCasePort {

  public getMovies = (): Movie[] => {
    return []
  }
}
