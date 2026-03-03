import ApiRouter from '../../../api/domain/model/ApiRouter'
import MovieController from '../adapter/api/MovieController'
import MovieRouter from '../adapter/api/MovieRouter'

export default class MovieRouterFactory {
  static readonly create = (controller: MovieController): ApiRouter => {
    const router = new MovieRouter(controller)
    if (!router) {
      throw new Error('Failed to create MovieRouter')
    }
    return router
  }
}
