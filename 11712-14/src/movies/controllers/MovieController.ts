import type { Request, Response } from 'express'

export default class MovieController {
  readonly getMovieList = (_req: Request, res: Response) => {
    res.send('Movie List')
  }

  readonly getMovie = (_req: Request, res: Response) => {
    res.send('Movie Details')
  }

  readonly getMovieImage = (_req: Request, res: Response) => {
    res.send('Movie Image')
  }
}
