import { Router } from 'express'
import ExpressRouter from '../../../../express/route/ExpressRouter'
import ClientController from '../controller/ClientController'

export default class ClientRouter implements ExpressRouter {
  router: Router
  path: string
  version: string

  constructor(private readonly clientController: ClientController) {
    this.router = Router()
    this.path = '/'
    this.version = ''
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.clientController.index.bind(this.clientController.index))
  }

}