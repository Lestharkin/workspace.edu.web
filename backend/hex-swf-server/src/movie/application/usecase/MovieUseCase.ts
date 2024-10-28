import Movie from '../../domain/model/movie/Movie'
import MovieRetrieverServicePort from '../../domain/port/driver/MovieRetrieverServicePort'
import MovieUseCasePort from '../../domain/port/driver/MovieUseCasePort'

export default class MovieUsecase implements MovieUseCasePort {

  constructor(
    private readonly movieRetrieverService: MovieRetrieverServicePort
  ) {
    
  }

  public getMovies = (): Movie[] => {
    const moviesData = this.movieRetrieverService.retrieve()
    return []
  }
}
