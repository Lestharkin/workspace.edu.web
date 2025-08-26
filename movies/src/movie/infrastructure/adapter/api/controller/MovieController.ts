import { Request, Response } from 'express'

import AbstractMovieController from '../../../../domain/api/AbstractMovieController'
import MovieUseCasePort from '../../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieController extends AbstractMovieController {
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    if (!id) {
      res.status(this.HTTPStatusCode.BAD_REQUEST).json({ error: 'Bad Request' })
      return
    }

    try {
      const movie = await this.movieUseCase.getById(id)

      res.status(this.HTTPStatusCode.OK).json(movie)
    } catch (error) {
      console.error('Internal Server Error: getById ', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }

  readonly getByIdList = async (req: Request, res: Response): Promise<void> => {
    const { idList } = req.params

    if (!idList) {
      res.status(this.HTTPStatusCode.BAD_REQUEST).json({ error: 'Bad Request' })
      return
    }

    const array = idList.split(',').map((id) => id.trim())

    if (array.length === 0) {
      res.status(this.HTTPStatusCode.BAD_REQUEST).json({ error: 'Bad Request' })
      return
    }

    try {
      const movies = await this.movieUseCase.getByIdList(array)

      res.status(this.HTTPStatusCode.OK).json(movies)
    } catch (error) {
      console.error('Internal Server Error: getByIdList ', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }
}
