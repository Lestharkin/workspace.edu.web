import type { Request, Response } from 'express'
import MovieModel from '../models/MovieModel'
import ImageModel from '../models/ImageModel'

export default class MovieController {
  constructor(
    private readonly movieModel: MovieModel,
    private readonly imageModel: ImageModel,
  ) {}

  readonly getMovieList = async (_req: Request, res: Response) => {
    const movies = await this.movieModel.fetchMovieList()
    res.status(200).json(movies)
  }

  readonly getMovie = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id || id === undefined) {
      res.status(400).json({ error: 'Movie ID is required' })
      return
    }

    let key = ''
    if (Array.isArray(id)) {
      key = id[0] ?? ''
    } else {
      key = id ?? ''
    }

    const movie = await this.movieModel.fetchMovieById(key)

    res.status(200).json(movie)
  }

  readonly getMovieImage = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id || id === undefined) {
      res.status(400).json({ error: 'Movie ID is required' })
      return
    }

    let key = ''
    if (Array.isArray(id)) {
      key = id[0] ?? ''
    } else {
      key = id ?? ''
    }

    const moviePath = await this.imageModel.getPath(key)

    res.status(200).sendFile(moviePath)
  }
}
