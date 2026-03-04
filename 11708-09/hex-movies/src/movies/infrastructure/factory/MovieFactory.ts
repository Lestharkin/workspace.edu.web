import ApiRouter from '../../../api/domain/model/ApiRouter'
import MovieRouter from '../adapter/api/MovieRouter'
import MovieControllerFactory from './MovieControllerFactory'
import MovieServiceFactory from './MovieServiceFactory'
import MovieUseCaseFactory from './MovieUseCaseFactory'
import JSONrepositoryFactory from './repository/JSONrepositoryFactory'
import SWAPIRepositoryFactory from './repository/SWAPIRepositoryFactory'

export default class MovieFactory {
  static readonly create = (): ApiRouter => {
    const swapi = SWAPIRepositoryFactory.create()

    const json = JSONrepositoryFactory.create()

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
