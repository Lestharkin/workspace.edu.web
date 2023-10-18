import { Router } from 'express'
import ErrorController from '../controller/ErrorController'

export default class ErrorRouter {
  router: Router

  constructor (private readonly errorController: ErrorController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('*', this.errorController.error)
  }
}
