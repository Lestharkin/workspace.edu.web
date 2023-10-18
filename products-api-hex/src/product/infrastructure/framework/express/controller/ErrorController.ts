import { Request, Response } from 'express'
import HTTPStatusCode from '../utils/HTTPStatusCode'

export default class ErrorController {
  error = (_: Request, res: Response): void => {
    res.status(HTTPStatusCode.NOT_FOUND).json({ error: '404 Not Found' })
  }
}
