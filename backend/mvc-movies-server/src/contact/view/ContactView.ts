import { Router } from 'express'
import ContactController from '../controller/ContactController'

export default class ContactView {
  router: Router

  constructor(private readonly contactController: ContactController) {
    this.router = Router()
    this.routes()
  }

  public routes = (): void => {
    this.router.get(
      '/message/register',
      this.contactController.register.bind(this.contactController)
    )
  }
}
