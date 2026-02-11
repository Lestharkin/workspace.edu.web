import { Request, Response } from 'express'
import MovieModel from '../models/MovieModel'

export default class MovieController {
  constructor(private readonly movieModel: MovieModel) {}

  readonly getMovieList = async (_req: Request, res: Response) => {
    const movies = await this.movieModel.fetchMovies()

    if (!movies) {
      res.status(400).json({ message: 'Movies not found' })
      return
    }

    res.status(200).json(movies)
  }
}
