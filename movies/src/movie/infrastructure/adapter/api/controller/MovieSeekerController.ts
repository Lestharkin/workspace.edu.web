import { Request, Response } from 'express'

import AbstractMovieController from '../../../../domain/api/AbstractMovieController'
import MovieUseCasePort from '../../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieSeekerController extends AbstractMovieController {
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly search = async (req: Request, res: Response): Promise<void> => {
    //TODO: implement search functionality
    const filter = req.query
    if (!filter) {
      res.status(this.HTTPStatusCode.BAD_REQUEST).json({ error: 'Bad Request' })
      return
    }

    try {
      const movies = await this.movieUseCase.search(filter)

      res.status(this.HTTPStatusCode.OK).json(movies)
    } catch (error) {
      console.error('Internal Server Error: search ', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }
}
