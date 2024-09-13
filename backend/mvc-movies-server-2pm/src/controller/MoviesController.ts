import { Request, Response } from 'express'

export default class MoviesController {
  
  public getMovies = (_req: Request, res: Response): void => {
    res.status(200).json({ message: 'GET /v1.0/movies' })
  }
}