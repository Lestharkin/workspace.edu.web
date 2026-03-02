import Movie from '../../domain/model/movie/Movie'
import NullMovie from '../../domain/model/movie/NullMovie'
import IMDBRepositoryPort from '../../domain/port/driven/repository/imdb/IMDBRepositoryPort'
import JSONRepositoryPort from '../../domain/port/driven/repository/json/JSONRepositoryPort'
import SWAPIRepositoryPort from '../../domain/port/driven/repository/swapi/SWAPIRepositoryPort'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'

export default class MovieService implements MovieServicePort {
  constructor(
    private readonly IMDBRepository: IMDBRepositoryPort,
    private readonly JSONRepository: JSONRepositoryPort,
    private readonly SWAPIRepository: SWAPIRepositoryPort,
  ) {}

  readonly retrieveById = async (id: string): Promise<Movie> => {
    const movieFromIMDB = await this.IMDBRepository.findById(id)
    if (movieFromIMDB) {
      //TODO transformar el movieFromIMDB a Movie
      return movieFromIMDB
    }

    const movieFromJSON = await this.JSONRepository.findById(id)
    if (movieFromJSON) {
      return movieFromJSON
    }

    const movieFromSWAPI = await this.SWAPIRepository.findById(id)
    if (movieFromSWAPI) {
      return movieFromSWAPI
    }

    return new NullMovie()
  }
}
