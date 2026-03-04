import { Request, Response } from 'express'
import ApiController from '../../../../api/domain/model/ApiController'
import MovieControllerInterface from '../../../domain/api/MovieControllerInterface'
import MovieUseCasePort from '../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieController
  extends ApiController
  implements MovieControllerInterface
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly getMovieByTitle = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { title } = req.query

    if (!title) {
      res
        .status(this.STATUS.BAD_REQUEST)
        .json({ error: 'Title query parameter is required' })
      return
    }

    const movie = await this.movieUseCase.getMovieByTitle(title.toString())
    res.status(this.STATUS.OK).json({
      data: movie,
    })
  }
}
