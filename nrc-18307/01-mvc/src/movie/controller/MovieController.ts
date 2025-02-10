import { Request, Response } from 'express'
import MovieModel from '../model/MovieModel'

export default class MovieController {
  constructor(private readonly movieModel: MovieModel) {}

  public getMovies(_req: Request, res: Response): void {
    res.status(200).json({ movies: this.movieModel.retrieveMovies() })
  }

  public async getMovieImage(req: Request, res: Response): Promise<void> {
    const { name } = req.params

    if(name === undefined) {
      res.status(400).send('Bad request')
      return
    }
    
    res.status(200).sendFile(await this.movieModel.retrieveMovieImage(name))
  }
}
