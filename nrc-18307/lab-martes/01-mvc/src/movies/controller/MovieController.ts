import { Request, Response } from 'express'

export default class MovieController {
  public getMovies(_req: Request, res: Response): void {
    res.status(200).send('Movies')
  }
}
