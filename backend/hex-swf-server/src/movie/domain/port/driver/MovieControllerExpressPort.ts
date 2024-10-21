import { Request, Response } from 'express'

export default interface MovieControllerExpressPort {
  movies(req: Request, res: Response): void
}