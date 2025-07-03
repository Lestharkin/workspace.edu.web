import { Router } from 'express'
import RouterExpressInterface from '../../server/router/RouterExpressInterface'
import InventoryView from '../view/InventoryView'

export default class InventoryRouter implements RouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly inventoryView: InventoryView) {
    this.router = Router()
    this.path = '/inventory'
    this.routes()
  }

  routes() {
    this.router.get('/', this.inventoryView.index.bind(this.inventoryView))
    this.router.get('/next', this.inventoryView.next.bind(this.inventoryView))
    this.router.get('/prev', this.inventoryView.prev.bind(this.inventoryView))
  }
}
