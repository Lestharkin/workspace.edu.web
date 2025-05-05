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

  public routes() {
    this.router.use('/', this.inventoryView.index.bind(this.inventoryView))
    this.router.use('/next', this.inventoryView.next.bind(this.inventoryView))
    this.router.use('/prev', this.inventoryView.prev.bind(this.inventoryView))
  }
}
