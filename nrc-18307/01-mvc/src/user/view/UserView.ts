import { Router } from 'express'
import UserController from '../controller/UserController'

export default class UserView {
  public router: Router

  constructor(private readonly userController: UserController) {
    this.router = Router()
    this.routes()
  }

  public routes() {
    this.router.post(
      '/login',
      this.userController.login.bind(this.userController)
    )
  }
}
