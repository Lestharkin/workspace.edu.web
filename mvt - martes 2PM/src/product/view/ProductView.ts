import { Request, Response } from 'express'

export default class ProductView {
  readonly getProductList = (_req: Request, res: Response): void => {
    res.status(200).json({ message: 'Product list' })
  }
}
