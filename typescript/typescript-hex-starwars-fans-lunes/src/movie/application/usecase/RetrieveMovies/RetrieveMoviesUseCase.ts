import Movie from '../../../domain/model/movie/Movie'
import RetrieveMoviesServicePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesServicePort'
import RetrieveMoviesUseCasePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesUseCasePort'

export default class RetrieveMoviesUseCase
  implements RetrieveMoviesUseCasePort
{
  constructor(
    private readonly retrieveMoviesService: RetrieveMoviesServicePort
  ) {}

  public static readonly getClassName = (): string => {
    return 'RetrieveMoviesUseCase'
  }

  public getMovies = async (): Promise<Movie[]> => {
    return this.retrieveMoviesService.getMovies()
  }
}
