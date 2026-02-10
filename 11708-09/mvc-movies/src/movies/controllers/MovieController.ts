import { Request, Response } from 'express'

export default class MovieController {
  readonly getMovieList = (_req: Request, res: Response) => {
    res.send('Movie list')
  }
}
