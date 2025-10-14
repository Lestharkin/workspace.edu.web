import { Request, Response } from 'express'

export default class ProductView {
  readonly getProductList = (_req: Request, res: Response) => {
    res.status(200).send('Product List')
  }
}
