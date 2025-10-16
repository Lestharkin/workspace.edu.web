import { Request, Response } from 'express'

export default class ErrorView {
  readonly notFound = (_req: Request, res: Response) => {
    res.status(404).render('error')
  }
}
