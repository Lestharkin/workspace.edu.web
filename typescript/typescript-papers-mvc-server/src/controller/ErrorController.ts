import { Request, Response } from 'express'

export default class ErrorController {
  notFound = (_req: Request, res: Response): void => {
    res.status(401).json({ message: 'not Found' })
  }
}
