import { Request, Response } from 'express'
import ProductsModel from '../model/ProductsModel'
export default class ProductsController {
  constructor (private readonly productsModel: ProductsModel) { }

  getProducts = (_: Request, res: Response): void => {
    this.productsModel.getProducts()
  }
}
