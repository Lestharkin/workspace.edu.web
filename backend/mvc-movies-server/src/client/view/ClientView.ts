import { Router } from 'express'
import ClientController from '../controller/ClientController'

export default class ClientView {
  router: Router

  constructor(private readonly clientController: ClientController) {
    this.router = Router()
    this.routes()
  }

  public routes = (): void => {
    this.router.get(
      '/',
      this.clientController.index.bind(this.clientController)
    )

    this.router.get(
      '*',
      this.clientController.not_found.bind(this.clientController)
    )
  }
}
