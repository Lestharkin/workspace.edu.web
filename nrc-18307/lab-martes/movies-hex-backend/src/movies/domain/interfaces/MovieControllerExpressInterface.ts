import { Request, Response } from 'express'
import ControllerExpressInterface from '../../../express/domain/ControllerExpressInterface'

export default interface MovieControllerExpressInterface
  extends ControllerExpressInterface {
  getMovies(req: Request, res: Response): Promise<void>
  getMovieById(req: Request, res: Response): Promise<void>
}
