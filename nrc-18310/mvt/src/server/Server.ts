import express, { Application } from 'express'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly env: ExpressProvider,
    private readonly routesExpress: RouterExpressInterface[]
  ) {
    this.app = express()
    this.configure()
    this.routes()
  }

  public routes() {
    this.routesExpress.forEach((route) => {
      this.app.use(route.path, route.router)
    })
  }

  public configure() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  public start() {
    const HOST = this.env.host()
    const PORT = this.env.port()
    const PROTOCOL = this.env.protocol()
    this.app.listen(PORT, () =>
      console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
    )
  }
}
