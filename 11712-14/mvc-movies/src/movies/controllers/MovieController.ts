import type { Request, Response } from 'express'
import MovieModel from '../models/MovieModel'

export default class MovieController {
  constructor(private readonly movieModel: MovieModel) {}

  readonly getMovieList = async (_req: Request, res: Response) => {
    const movies = await this.movieModel.fetchMovieList()

    res.status(200).json(movies)
  }

  readonly getMovie = (_req: Request, res: Response) => {
    res.send('Movie Details')
  }

  readonly getMovieImage = (_req: Request, res: Response) => {
    res.send('Movie Image')
  }
}
