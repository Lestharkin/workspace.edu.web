import { Request, Response } from 'express'
import ProductsModel from '../model/ProductsModel'

export default class ProductsView {
  constructor (private readonly productsModel: ProductsModel) { }

  index = (_: Request, res: Response): void => {
    this.productsModel.getProductById(1).then((product) => {
      res.render('ProductsTemplate', { product })
    }).catch((err) => {
      console.log(err)
      res.render('ProductsTemplate', { product: null })
    })
  }

  next = (req: Request, res: Response): void => {
    const { idp } = req.query
    this.productsModel.getProductById(Number(idp) + 1).then((product) => {
      res.render('ProductsTemplate', { product })
    }).catch((err) => {
      console.log(err)
      res.render('ProductsTemplate', { product: null })
    })
  }
}
