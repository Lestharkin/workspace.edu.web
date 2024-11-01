import Movie from '../../domain/model/movie/Movie'
import NullMovie from '../../domain/model/movie/NullMovie'
import MovieRetrieverServicePort from '../../domain/port/driver/MovieRetrieverServicePort'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'

export default class MovieUsecase implements MovieUseCasePort {
  constructor(
    private readonly movieRetrieverService: MovieRetrieverServicePort
  ) {}

  public getMovies = async (): Promise<Movie[]> => {
    const moviesData = await this.movieRetrieverService.retrieve()
    if (moviesData.length > 0) {
      return moviesData
    }
    return [new NullMovie()]
  }
}
