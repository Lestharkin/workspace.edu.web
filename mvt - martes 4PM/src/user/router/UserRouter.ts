import { Router } from 'express'
import UserView from '../view/UserView'

export default class UserRouter {
  router: Router

  constructor(private readonly productView: UserView) {
    this.router = Router()
    this.routes()
  }

  readonly routes = () => {
    this.router.get('/user/registration', this.productView.formRegister)
    this.router.post('/user/registration', this.productView.register)
  }
}
