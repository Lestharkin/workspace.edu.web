import { Router } from 'express'
import ErrorExpressControllerInterface from '../../domain/ErrorExpressControllerInterface'

export default class ErrorRouterExpressInterface
  implements ErrorRouterExpressInterface
{
  router: Router
  path: string

  constructor(
    private readonly errorController: ErrorExpressControllerInterface
  ) {
    this.router = Router()
    this.path = '*'
    this.routes()
  }

  public routes() {
    this.router.use('*', this.errorController.error.bind(this.errorController))
  }
}
