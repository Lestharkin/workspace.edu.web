import ApiRouter from '../../../api/domain/model/ApiRouter'
import MovieControllerFactory from './MovieControllerFactory'
import MovieRouterFactory from './MovieRouterFactory'
import MovieServiceFactory from './MovieServiceFactory'
import MovieUsecaseFactory from './MovieUsecaseFactory'
import AbstractRepositoryFactory, {
  RepositoryType,
} from './repository/AbstractRepositoryFactory'

export default class MovieFactory {
  static readonly create = (): ApiRouter => {
    const service = MovieServiceFactory.create(
      AbstractRepositoryFactory.create(RepositoryType.IMDB),
      AbstractRepositoryFactory.create(RepositoryType.JSON),
      AbstractRepositoryFactory.create(RepositoryType.SWAPI),
    )

    const usecase = MovieUsecaseFactory.create(service)

    const controller = MovieControllerFactory.create(usecase)

    const router = MovieRouterFactory.create(controller)
    return router
  }
}
