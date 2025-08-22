import { Router } from 'express'

export default abstract class AbstractRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  abstract routes(): void
}
