import { Router } from 'express'
import ProductView from '../view/ProductView'

export default class ProductRouter {
  router: Router

  constructor(private readonly productView: ProductView) {
    this.router = Router()
    this.routes()
  }

  readonly routes = () => {
    this.router.get('/v1.0/list', this.productView.getProductList)
  }
}
