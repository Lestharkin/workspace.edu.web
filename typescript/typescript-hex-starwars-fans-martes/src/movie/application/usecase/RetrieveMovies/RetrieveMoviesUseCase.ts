
import Movie from '../../../domain/model/movie/Movie'
import RetrieveMoviesServicePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesServicePort'
import RetrieveMoviesUseCasePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesUseCasePort'

export default class RetrieveMoviesUseCase implements RetrieveMoviesUseCasePort {
  name: string

  constructor(private readonly retrieveMoviesService: RetrieveMoviesServicePort) {
    this.name = 'RetrieveMoviesUseCase'
  }

  public getMovies = async (): Promise<Movie[]> => {
    return this.retrieveMoviesService.getMovies()
  }
}
  
