import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

import { Request, Response } from 'express'
export default interface MovieControllerExpressInterface
  extends ControllerExpressInterface {
  getMovies(req: Request, res: Response): void
  getMovieById(req: Request, res: Response): void
}
