import Server from './express/Server'
import ProductsRouter from './products/router/ProductsRouter'
import ProductsView from './products/view/ProductsView'

const view = new ProductsView()

const router = new ProductsRouter(view)

const server = new Server(router)
server.start()