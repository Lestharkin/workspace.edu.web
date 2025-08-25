import { Request, Response } from 'express'

import AbstractController from '../../../../domain/model/AbstractController'

export default class ErrorController extends AbstractController {
  readonly notFound = (_req: Request, res: Response): void => {
    res
      .status(this.HTTPStatusCode.NOT_FOUND)
      .json({ error: 'Resource Not Found' })
  }
}
