import MovieService from '../../application/service/MovieService'
import IMDBRepositoryPort from '../../domain/port/driven/repository/imdb/IMDBRepositoryPort'
import JSONRepositoryPort from '../../domain/port/driven/repository/json/JSONRepositoryPort'
import SWAPIRepositoryPort from '../../domain/port/driven/repository/swapi/SWAPIRepositoryPort'
import MovieServicePort from '../../domain/port/driver/service/MovieServicePort'

export default class MovieServiceFactory {
  static readonly create = (
    IMDBRepository: IMDBRepositoryPort,
    JSONRepository: JSONRepositoryPort,
    SWAPIRepository: SWAPIRepositoryPort,
  ): MovieServicePort => {
    const service = new MovieService(
      IMDBRepository,
      JSONRepository,
      SWAPIRepository,
    )
    if (!service) {
      throw new Error('Failed to create MovieService')
    }
    return service
  }
}
