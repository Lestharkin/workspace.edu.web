import { Request, Response } from 'express'
import ProductsModel from '../model/ProductsModel'
export default class ProductsController {
  constructor (private readonly productsModel: ProductsModel) { }

  getProducts = (_: Request, res: Response): void => {
    this.productsModel.getProducts().then((products) => {
      res.status(200).json(products)
    }).catch((err: Error) => {
      res.status(500).json(err)
    })
  }

  controlError = (_: Request, res: Response): void => {
    res.status(404).json({ error: 'Not Found' })
  }
}
