import { Request, Response } from 'express'
import MovieModel from '../model/MovieModel'

export default class MovieController {
  constructor(private readonly movieModel: MovieModel) {}

  public getMovies(_req: Request, res: Response): void {
    res.status(200).json({ movies: this.movieModel.retrieveMovies() })
  }

  public getMovieImage(req: Request, res: Response) {
    const { name } = req.params

    if(name === undefined) {
      res.status(400).json({ error: 'Name parameter is required' })
      return
    }

    const image = this.movieModel.retrieveMovieImage(name)

    res.status(200).sendFile(image)
  }
}
