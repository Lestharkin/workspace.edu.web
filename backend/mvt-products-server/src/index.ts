import Server from './express/Server'
import ProductsModel from './products/model/ProductsModel'
import ProductsRouter from './products/router/ProductsRouter'
import ProductsView from './products/view/ProductsView'

const model = new ProductsModel()
model.init()

const view = new ProductsView(model)

const router = new ProductsRouter(view)

const server = new Server(router)
server.start()