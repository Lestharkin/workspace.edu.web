
import Movie from '../../../domain/model/Movie'
import RetrieveMoviesUseCasePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesUseCasePort'

export default class RetrieveMoviesUseCase implements RetrieveMoviesUseCasePort {
  name: string

  constructor(
    private readonly retrieveMoviesUseCasePort: RetrieveMoviesUseCasePort
  ) {
    this.name = 'RetrieveMoviesUseCase'
  }

  public getMovies = async (): Promise<Movie[]> => {
    return this.retrieveMoviesUseCasePort.getMovies()
  }
}
  
