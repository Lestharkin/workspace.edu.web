import { Request, Response } from 'express'
import ControllerExpressInterface from './ControllerExpressInterface'

export default interface ErrorExpressControllerInterface
  extends ControllerExpressInterface {
  error: (_req: Request, res: Response) => void
}
