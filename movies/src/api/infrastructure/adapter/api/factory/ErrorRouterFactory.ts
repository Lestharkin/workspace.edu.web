import AbstractRouter from '../../../../domain/model/AbstractRouter'
import ErrorController from '../controller/ErrorController'
import ErrorRouter from '../router/ErrorRouter'

export default class ErrorRouterFactory {
  static readonly create = (): AbstractRouter => {
    try {
      const controller = new ErrorController()
      if (!controller) {
        throw new Error('Failed to create ErrorController')
      }

      const errorRouter = new ErrorRouter(controller)
      if (!errorRouter) {
        throw new Error('Failed to create ErrorRouter')
      }

      return errorRouter
    } catch (error) {
      console.error('Error creating ErrorRouter:', error)
      throw error
    }
  }
}
