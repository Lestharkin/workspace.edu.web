import Movie from '../../domain/model/movie/Movie'
import JSONrepositoryPort from '../../domain/port/driven/repository/JSONrepositoryPort'
import SWAPIRepositoryPort from '../../domain/port/driven/repository/SWAPIRepositoryPort'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'

export default class MovieService implements MovieServicePort {
  constructor(
    private readonly swapiRepository: SWAPIRepositoryPort,
    private readonly jsonRepository: JSONrepositoryPort,
  ) {}

  readonly retrieveMovieByTitle = async (title: string): Promise<Movie> => {
    const movieFromJson = await this.jsonRepository.findByTitle(title)

    const movieFromSwapi = await this.swapiRepository.findByTitle(title)

    if (!movieFromJson && !movieFromSwapi) {
      throw new Error(`Movie with title ${title} not found`)
    }

    // TODO: combine the two movies = Movie

    return Movie.Builder().build()
  }
}
