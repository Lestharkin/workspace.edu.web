import { Router } from 'express'

export default abstract class ApiRouter {
  router: Router

  constructor() {
    this.router = Router()
  }

  abstract readonly routes: () => void
}
