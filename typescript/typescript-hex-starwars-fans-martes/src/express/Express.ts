import express, { Application } from 'express'
import Environment from './config/Environment'
import ExpressRouter from './route/ExpressRouter'
import path from 'path'

export default class Express {
  private readonly app: Application
  private readonly env: Environment

  constructor(private readonly expressRouter: ExpressRouter[]) {
    this.app = express()
    this.env = new Environment()
    this.config()
    this.routes()
  }

  public getApp = (): Application => {
    return this.app
  }

  config = (): void => {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(path.join(__dirname, '../frontend')))
  }

  routes = (): void => {
    this.expressRouter.forEach((router) => {
      this.app.use(router.path, router.router)
    })
    // this.app.use('*', this.errorView.router)
  }

  start = (): void => {
    this.app.listen(this.env.PORT, () => {
      console.log(
        `Server is running on http://${this.env.HOST}:${this.env.PORT}`
      )
    })
  }
}
