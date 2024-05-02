import Movie from '../../../domain/model/movie/Movie'
import RetrieveMoviesPort from '../../../domain/port/driven/RetrieveMoviesPort'
import RetrieveMoviesServicePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesServicePort'

export default class RetrieveMoviesService
  implements RetrieveMoviesServicePort
{
  constructor(private readonly retrieveMovies: RetrieveMoviesPort) {}

  public static readonly getClassName = (): string => {
    return 'RetrieveMoviesService'
  }

  public getMovies = async (): Promise<Movie[]> => {
    const movies = await this.retrieveMovies.findAll()
    console.log(movies)
    return movies
  }
}
