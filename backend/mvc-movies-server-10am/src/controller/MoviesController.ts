import { Request, Response } from 'express'

export default class MoviesController {


  public getMovies = (_req: Request, res: Response) => {
    res.json({ message: 'Hello, movies!' })
  }

}