import { Router } from 'express'

export default class ProductsRouter {
  router: Router

  constructor (private readonly productsController: ProductsController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.productsController.products)
  }
}
