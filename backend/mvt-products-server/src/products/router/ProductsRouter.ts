
import { Router } from 'express'
import ProductsView from '../view/ProductsView'

export default class ProductsRouter {
  router: Router

  constructor(private readonly productsView: ProductsView) {
    this.router = Router()
    this.routes()
  }

  public routes = (): void => {
    this.router.get(
      '/',
      this.productsView.index.bind(this.productsView)
    )
  }
}
