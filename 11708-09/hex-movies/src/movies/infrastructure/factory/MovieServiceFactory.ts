import MovieService from '../../application/service/MovieService'
import JSONrepositoryPort from '../../domain/port/driven/repository/JSONrepositoryPort'
import SWAPIRepositoryPort from '../../domain/port/driven/repository/SWAPIRepositoryPort'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'

export default class MovieServiceFactory {
  static readonly create = (
    swapiRepository: SWAPIRepositoryPort,
    jsonRepository: JSONrepositoryPort,
  ): MovieServicePort => {
    const movieService = new MovieService(swapiRepository, jsonRepository)
    if (!movieService) {
      throw new Error('Failed to create MovieService')
    }
    return movieService
  }
}
