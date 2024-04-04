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
    this.router.get('/eco/product/image/:id', this.productController.getProductImage.bind(this.productController.getProductImage))
  } 
}