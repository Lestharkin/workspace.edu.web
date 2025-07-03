import express, { Application } from 'express'
import RouterExpressInterface from '../../domain/RouterExpressInterface'
import ExpressProvider from '../provider/ExpressProvider'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly routersExpress: RouterExpressInterface[],
    private readonly errorRouter: RouterExpressInterface
  ) {
    this.app = express()
    this.configure()
    this.routes()
  }

  public routes() {
    this.routersExpress.forEach((router) => {
      this.app.use(router.path, router.router)
    })

    this.app.use(this.errorRouter.path, this.errorRouter.router)
  }

  public configure() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  public start() {
    const PORT = ExpressProvider.getPort()
    this.app.listen(PORT, () =>
      console.log(`Server is running on ${ExpressProvider.getAPIDomain()}`)
    )
  }
}
