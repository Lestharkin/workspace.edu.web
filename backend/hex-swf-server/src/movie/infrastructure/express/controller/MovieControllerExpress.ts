import { Request, Response } from 'express'

import MovieControllerExpressPort from '../../../domain/port/driver/MovieControllerExpressPort'

export default class MovieControllerExpress
  implements MovieControllerExpressPort
{
  public movies(_req: Request, res: Response): void {
    res.status(200).json({ message: 'Hello Movies' })
  }
}
