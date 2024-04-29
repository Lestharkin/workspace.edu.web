
import Movie from '../../../domain/model/movie/Movie'
import RetrieveMoviesUseCasePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesUseCasePort'

export default class RetrieveMoviesUseCase implements RetrieveMoviesUseCasePort {
  name: string

  constructor(private readonly retrieveMoviesService: RetrieveMoviesUseCasePort) {
    this.name = 'RetrieveMoviesUseCase'
  }

  public getMovies = async (): Promise<Movie[]> => {
    return this.retrieveMoviesService.getMovies()
  }
}
  
