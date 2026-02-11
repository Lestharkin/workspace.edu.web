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

  readonly getMovie = async (req: Request, res: Response) => {
    const { title } = req.params

    if (!title) {
      res.status(404).json({ message: 'Title is required' })
      return
    }

    let key = ''
    if (Array.isArray(title)) {
      key = title[0] ?? ''
    } else {
      key = title
    }

    const movie = await this.movieModel.fetchMovie(key)

    if (!movie) {
      res.status(400).json({ message: 'Movies not found' })
      return
    }

    res.status(200).json(movie)
  }
}
