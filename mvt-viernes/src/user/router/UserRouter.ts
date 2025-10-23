import { Router } from 'express'
import UserView from '../view/UserView'

export default class UserRouter {
  router: Router

  constructor(private readonly UserView: UserView) {
    this.router = Router()
    this.routes()
  }

  readonly routes = () => {
    this.router.get('/v1.0/register', this.UserView.formRegister)
    this.router.post('/v1.0/register', this.UserView.register)
  }
}
