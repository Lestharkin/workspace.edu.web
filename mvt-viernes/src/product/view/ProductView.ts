import { Request, Response } from 'express'
import ProductModel from '../model/ProductModel'

export default class ProductView {
  constructor(private readonly productModel: ProductModel) {}

  readonly getProductList = (_req: Request, res: Response) => {
    const products = this.productModel.getAllProducts()
    res.status(200).render('products', { products })
  }
}
