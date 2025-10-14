import express, { Application } from 'express'
import path from 'path'
import ProductRouter from './product/router/ProductRouter'
import ProductView from './product/view/ProductView'
import { Request, Response } from 'express'

export default class Server {
  private readonly app: Application

  constructor(private readonly productRouter: ProductRouter) {
    this.app = express()
    this.configure()
    this.static()
    this.routes()
  }

  private readonly configure = (): void => {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.set('view engine', 'ejs')
    this.app.set('views', path.join(__dirname, './template'))
  }

  private readonly routes = (): void => {
    this.app.get('/products', this.productRouter.router)
    this.app.get('/{*any}', (_req: Request, res: Response) => {
      res.status(404).send('404')
    })
  }

  private readonly static = (): void => {
    this.app.use(express.static(path.join(__dirname, './public')))
  }

  readonly start = (): void => {
    const port = 1888
    const host = 'localhost'
    this.app.listen(port, () => {
      console.log(`Server is running on http://${host}:${port}`)
    })
  }
}

const server = new Server(new ProductRouter(new ProductView()))
server.start()
