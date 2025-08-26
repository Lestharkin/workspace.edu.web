import { Request, Response } from 'express'

import AbstractMovieController from '../../../../domain/api/AbstractMovieController'
import Movie, { MovieInterface } from '../../../../domain/model/Movie/Movie'
import MovieUseCasePort from '../../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieRecorderController extends AbstractMovieController {
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly create = async (req: Request, res: Response): Promise<void> => {
    const movieData = req.body

    const requiredFields = [
      'title',
      'synopsis',
      'release',
      'classification',
      'genre',
      'characters',
      'director',
      'producers',
      'studio',
    ]

    for (const field of requiredFields) {
      if (!movieData[field]) {
        res.status(this.HTTPStatusCode.BAD_REQUEST).json({
          error: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        })
        return
      }
    }

    const movie = movieData as MovieInterface

    try {
      const movieCreated = await this.movieUseCase.register(new Movie(movie))

      if (movieCreated.isNull) {
        res.status(this.HTTPStatusCode.BAD_REQUEST).json(movieCreated)
        return
      }

      res.status(this.HTTPStatusCode.CREATED).json(movieCreated)
    } catch (error) {
      console.error('Internal Server Error: create ', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }
}
