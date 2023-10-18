import { Router } from 'express'
import ProductController from '../controller/ProductController'

export default class ProductsRouter {
  router: Router

  constructor (private readonly productController: ProductController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/products', this.productController.getProducts)
    this.router.get('/product/:id', this.productController.getProductById)
    this.router.post('/products/price', this.productController.getProductsByPrice)
  }
}
