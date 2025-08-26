import { Application, Router } from 'express'

export default abstract class AbstractRouter {
  protected router: Router
  protected path: string

  constructor(path: string) {
    this.path = path
    this.router = Router()
  }

  readonly attach = (app: Application) => {
    app.use(this.path, this.router)
  }

  protected abstract routes(): void
}
