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

  getProductById = (req: Request, res: Response): void => {
    const { id } = req.params
    // Aquí se tiene validar el id
    this.productsModel.getProductById(Number(id)).then((product) => {
      // Aquí se tiene que manipular el producto
      res.status(200).json(product)
    }).catch((err: Error) => {
      res.status(500).json(err)
    })
  }

  controlError = (_: Request, res: Response): void => {
    res.status(404).json({ error: 'Not Found' })
  }

  getProductsByPrice = (req: Request, res: Response): void => {
    const { min, max } = req.body
    // Aquí se tiene validar las entradas
    this.productsModel.getProductsByPrice(min, max).then((products) => {
      res.status(200).json(products)
    }).catch((err: Error) => {
      res.status(500).json(err)
    })
  }
}
