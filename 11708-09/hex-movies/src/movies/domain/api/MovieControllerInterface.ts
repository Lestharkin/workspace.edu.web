import { Request, Response } from 'express'

export default interface MovieControllerInterface {
  readonly getMovieByTitle: (req: Request, res: Response) => Promise<void>
}
