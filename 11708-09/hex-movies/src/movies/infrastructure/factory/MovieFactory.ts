import ApiRouter from '../../../api/domain/model/ApiRouter'
import MovieRouter from '../adapter/api/MovieRouter'
import MovieControllerFactory from './MovieControllerFactory'
import MovieServiceFactory from './MovieServiceFactory'
import MovieUseCaseFactory from './MovieUseCaseFactory'
import AbstractFinderFactory, {
  FinderType,
} from './repository/AbstractFinderFactory'

export default class MovieFactory {
  static readonly create = (): ApiRouter => {
    const swapi = AbstractFinderFactory.create(FinderType.SWAPI)

    const json = AbstractFinderFactory.create(FinderType.JSON)

    const service = MovieServiceFactory.create(swapi, json)

    const usecase = MovieUseCaseFactory.create(service)

    const controller = MovieControllerFactory.create(usecase)

    const movieRouter = new MovieRouter(controller)
    if (!movieRouter) {
      throw new Error('Failed to create MovieRouter')
    }
    return movieRouter
  }
}
