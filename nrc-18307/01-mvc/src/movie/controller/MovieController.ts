import { Request, Response } from 'express'
import MovieModel from '../model/MovieModel'

export default class MovieController {
  constructor(private readonly movieModel: MovieModel) {}

  public getMovies(_req: Request, res: Response): void {
    res.status(200).json({ movies: this.movieModel.retrieveMovies() })
  }

  public getMovieImage(req: Request, res: Response): void {
    const { name } = req.params
    
    res.status(200).sendFile(this.movieModel.retrieveMovieImage(name))
  }
}
