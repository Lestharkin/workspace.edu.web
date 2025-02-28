import { Router } from 'express'
import RouterExpressInterface from '../../../domain/RouterExpressInterface'
import ErrorControllerExpressInterface from '../../../domain/ErrorControllerExpress'

export default class ErrorRouterExpress implements RouterExpressInterface {
  router: Router
  path: string

  constructor(
    private readonly errorController: ErrorControllerExpressInterface
  ) {
    this.router = Router()
    this.path = '*'
    
    this.routes()
  }

  public routes = (): void => {
    this.router.all(this.path, this.errorController.error.bind(this.errorController))
  }
}
