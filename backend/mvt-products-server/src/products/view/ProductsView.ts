import { Request, Response } from 'express';

export default class ProductsView {
  index = (_req: Request, res: Response) => {
    res.render('products')
  }
}