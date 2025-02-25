import { Router } from 'express'
import ErrorControllerExpressInterface from '../../domain/ErrorControllerExpressInterface'
import RouterExpressInterface from '../../domain/RouterExpressInterface'

export default class ErrorExpressRouter
  implements RouterExpressInterface
{
  router: Router
  path: string

  constructor(
    private readonly errorController: ErrorControllerExpressInterface
  ) {
    this.router = Router()
    this.path = '*'
    this.routes()
  }

  public routes() {
    this.router.use('*', this.errorController.error.bind(this.errorController))
  }
}
