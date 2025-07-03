import { Request, Response } from 'express'
import ControllerExpressInterface from './ControllerExpressInterface'

export default interface ErrorControllerExpressInterface
  extends ControllerExpressInterface {
  error: (_req: Request, res: Response) => void
}
