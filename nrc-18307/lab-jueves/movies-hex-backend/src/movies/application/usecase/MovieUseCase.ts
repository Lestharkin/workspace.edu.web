import Movie from '../../domain/movie/Movie'
import NullMovie from '../../domain/movie/NullMovie'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'

export default class MovieUseCase implements MovieUseCasePort {
  
  public getMovies(): Movie[] {
    // TODO: Business logic here
    const movies = [
      new NullMovie()
    ]

    return movies
  }
}
