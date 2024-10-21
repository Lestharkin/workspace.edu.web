import { Router } from 'express'

export default abstract class RouterExpress {
  router: Router

  constructor() {
    this.router = Router()
    // this.routes()
  }

  public abstract routes: () => void
}
