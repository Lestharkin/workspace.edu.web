import InventoryRouter from './inventory/router/InventoryRouter'
import InventoryView from './inventory/view/InventoryView'
import ExpressProvider from './server/provider/ExpressProvider'
import Server from './server/Server'

const env = new ExpressProvider()

const inventoryRouter = new InventoryRouter(new InventoryView())

const server = new Server(env, [inventoryRouter])

server.start()
