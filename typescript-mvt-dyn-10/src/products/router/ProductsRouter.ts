import { Router } from 'express'
import ProductsView from '../view/ProductsView'

export default class ProductsRouter {
  router: Router

  constructor (private readonly productsView: ProductsView) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/next', this.productsView.next)
    this.router.get('/', this.productsView.index)
  }
}
