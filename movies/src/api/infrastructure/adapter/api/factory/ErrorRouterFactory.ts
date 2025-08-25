import ErrorController from '../controller/ErrorController'
import ErrorRouter from '../router/ErrorRouter'

export default class ErrorRouterFactory {
  static create(): ErrorRouter {
    const errorController = new ErrorController()
    if (!errorController) {
      throw new Error('Failed to create ErrorController')
    }

    const errorRouter = new ErrorRouter(errorController)
    if (!errorRouter) {
      throw new Error('Failed to create ErrorRouter')
    }
    return errorRouter
  }
}
