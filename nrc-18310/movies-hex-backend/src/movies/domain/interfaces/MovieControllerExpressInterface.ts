import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

import { Request, Response } from 'express'
export default interface MovieControllerExpressInterface
  extends ControllerExpressInterface {
  getMovies(req: Request, res: Response): Promise<void>
  getMovieById(req: Request, res: Response): Promise<void>
  getMovieResume(req: Request, res: Response): Promise<void>
}
