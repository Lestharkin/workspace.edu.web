import { Request, Response } from 'express'
import ProductManagementPort from '../../../../domain/port/driver/ProductManagementPort'
import HTTPStatusCode from '../utils/HTTPStatusCode'

export default class ProductController {
  constructor (private readonly productManagement: ProductManagementPort) { }

  getProducts = (_: Request, res: Response): void => {
    this.productManagement.getProducts().then((products) => {
      res.status(HTTPStatusCode.ACCEPTED).json(products)
    }).catch((err: Error) => {
      res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json(err)
    })
  }

  getProductById = (req: Request, res: Response): void => {
    const { id } = req.params
    // TODO validate id
    this.productManagement.getProduct(id).then((product) => {
      // Aquí se tiene que manipular el producto
      res.status(HTTPStatusCode.ACCEPTED).json(product)
    }).catch((err: Error) => {
      res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json(err)
    })
  }

  getProductsByPrice = (req: Request, res: Response): void => {
    const { min, max } = req.body
    // TODO validate min and max
    this.productManagement.getProductsByPrice(Number(min), Number(max)).then((products) => {
      res.status(HTTPStatusCode.ACCEPTED).json(products)
    }).catch((err: Error) => {
      res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json(err)
    })
  }
}
