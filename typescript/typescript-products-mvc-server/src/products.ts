import ErrorController from './controller/ErrorController'
import ProductController from './controller/ProductController'
import ExpressServer from './express/ExpressServer'
import ProductModel from './model/ProductModel'
import ErrorView from './view/ErrorView'
import ProductView from './view/ProductView'

const server = new ExpressServer(
  new ProductView(
    new ProductController(
      new ProductModel()
    )
  ),
  new ErrorView(
    new ErrorController()
  )
)
server.start()
