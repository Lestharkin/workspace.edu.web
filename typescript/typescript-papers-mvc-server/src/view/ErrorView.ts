import { Router } from 'express'
import ErrorController from '../controller/ErrorController'

export default class ErrorView {
  router: Router

  constructor (private readonly errorController: ErrorController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.errorController.notFound.bind(this.errorController.notFound))
  }
}
