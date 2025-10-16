import { Router } from 'express'
import ContactView from '../view/ContactView'

export default class ContactRouter {
  router: Router

  constructor(private readonly contactView: ContactView) {
    this.router = Router()
    this.routes()
  }

  readonly routes = () => {
    this.router.get('/v1.0/contact', this.contactView.contact)
    this.router.post('/v1.0/contact', this.contactView.register)
  }
}
