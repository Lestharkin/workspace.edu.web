import { Request, Response } from 'express'
import ProductModel from '../model/ProductModel'

export default class ProductView {
  constructor(private readonly productModel: ProductModel) {}

  readonly getProductList = async (_req: Request, res: Response) => {
    const products = await this.productModel.fetchProducts()
    res.status(200).render('products', { products })
  }
}
