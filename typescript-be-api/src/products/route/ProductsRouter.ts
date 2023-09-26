import { Router } from 'express'
import ProductsController from '../controller/ProductsController'

export default class ProductsRouter {
  router: Router

  constructor (private readonly productsController: ProductsController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/products', this.productsController.getProducts)
    this.router.get('/product/:id', this.productsController.getProductById)
    this.router.get('*', this.productsController.controlError)
  }
}
