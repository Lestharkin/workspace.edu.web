import { Request, Response } from 'express'
import ProductsModel from '../model/ProductsModel'

export default class ProductsView {
  constructor(private readonly productsModel: ProductsModel) {}

  index = (_req: Request, res: Response) => {
    const product = this.productsModel.next()
    console.log(product);
    
    res.render('products', { product })
  }
}
