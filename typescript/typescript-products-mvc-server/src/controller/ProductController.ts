import { Request, Response } from 'express'

export default class ProductController {
  constructor(private readonly productModel: ProductModel) {
    
  }

  getProducts = (_req: Request, res: Response) => {
    const products = this.productModel.getProducts()
  }
}