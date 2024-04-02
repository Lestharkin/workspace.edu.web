import { Router } from "express";
import ProductController from "../controller/ProductController";

export default class ProductView {
  router: Router

  constructor(private readonly productController: ProductController) { 
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/eco/products', this.productController.getProducts.bind(this.productController.getProducts))
  } 
}