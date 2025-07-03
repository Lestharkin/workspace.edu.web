import { Request, Response } from 'express'

import ErrorControllerExpressInterface from '../../../domain/ErrorControllerExpress'

export default class ErrorControllerExpress
  implements ErrorControllerExpressInterface
{
  public error(_req: Request, res: Response): void {
    res.status(404).send({error: '404 Not Found'})
  }
}
