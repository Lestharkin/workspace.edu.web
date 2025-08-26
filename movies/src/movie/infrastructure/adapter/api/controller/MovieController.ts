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

  readonly create = async (_req: Request, _res: Response): Promise<void> => {}

  readonly getByIdList = async (
    _req: Request,
    _res: Response
  ): Promise<void> => {}

  readonly search = async (_req: Request, _res: Response): Promise<void> => {}
}
