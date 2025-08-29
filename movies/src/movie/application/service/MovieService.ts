import MovieServiceInterface from '../../domain/interfaces/MovieServiceInterface'
import Movie from '../../domain/model/Movie/Movie'
// import LocalRepositoryPort from '../../domain/port/driven/adapter/repository/LocalRepositoryPort'
// import RapidRepositoryPort from '../../domain/port/driven/adapter/repository/RapidRepositoryPort'
import SwapiRepositoryPort from '../../domain/port/driven/adapter/repository/SwapiRepositoryPort'

export default class MovieService implements MovieServiceInterface {
  constructor(
    // private readonly rapidRepository: RapidRepositoryPort,
    private readonly swapiRepository: SwapiRepositoryPort
  ) // private readonly localRepository: LocalRepositoryPort
  {}

  readonly findByTitle = async (title: string): Promise<Movie[]> => {
    const movies: Movie[] = []
    // const rapidMovies = await this.rapidRepository.findByTitle(title)
    const swapiMovies = await this.swapiRepository.findByTitle(title)
    // const localMovies = await this.localRepository.findByTitle(title)

    // movies.push(...rapidMovies, ...swapiMovies, ...localMovies)
    movies.push(...swapiMovies)
    return movies
  }
}
