import express, { Application } from 'express'
import ExpressProvider from '../provider/ExpressProvider'
import RouterExpressInterface from '../../domain/RouterExpressInterface'
import ErrorRouterExpressInterface from '../error/router/ErrorExpressRouter'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly routesExpress: RouterExpressInterface[],
    private readonly error: ErrorRouterExpressInterface
  ) {
    this.app = express()
    this.configure()
    this.routes()
  }

  public routes() {
    if (this.routesExpress.length === 0) {
      this.app.use(this.error.path, this.error.router)
    }

    this.routesExpress.forEach((route) => {
      this.app.use(route.path, route.router)
    })
  }

  public configure() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  public start() {
    const HOST = ExpressProvider.getHost()
    const PORT = ExpressProvider.getPort()
    const PROTOCOL = ExpressProvider.getProtocol()
    this.app.listen(PORT, () =>
      console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
    )
  }
}
