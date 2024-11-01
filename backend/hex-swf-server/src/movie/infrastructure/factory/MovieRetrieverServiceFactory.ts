import MovieImageService from '../../application/service/MovieImageService'
import MovieRetrieverService from '../../application/service/MovieRetrieverService'
import MovieRetrieverServicePort from '../../domain/port/driver/MovieRetrieverServicePort'
import SWAPIRepositoryFactory from './SWAPIRepositoryFactory'

export default class MovieRetrieverServiceFactory {
  public static readonly create = (): MovieRetrieverServicePort  => {
    const swApiRepository = SWAPIRepositoryFactory.create()
    const movieImageService = new MovieImageService()
    return new MovieRetrieverService(movieImageService, swApiRepository)
  }
}
