import express, { Application } from 'express'
import path from 'path'
import ProductRouter from './product/router/ProductRouter'
import ProductView from './product/view/ProductView'
import ProductModel from './product/model/ProductModel'
import ErrorRouter from './error/router/ErrorRouter'
import ErrorView from './error/view/ErrorView'
import ContactRouter from './contact/router/ContactRouter'
import ContactView from './contact/view/ContactView'
import UserRouter from './user/router/UserRouter'
import UserView from './user/view/UserView'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly productRouter: ProductRouter,
    private readonly contactRouter: ContactRouter,
    private readonly userRouter: UserRouter,
    private readonly errorRouter: ErrorRouter
  ) {
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
    this.app.use('/users', this.userRouter.router)
    this.app.use('/contacts', this.contactRouter.router)
    this.app.use('/products', this.productRouter.router)
    this.app.use('/{*any}', this.errorRouter.router)
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

const server = new Server(
  new ProductRouter(new ProductView(new ProductModel())),
  new ContactRouter(new ContactView()),
  new UserRouter(new UserView()),
  new ErrorRouter(new ErrorView())
)
server.start()
