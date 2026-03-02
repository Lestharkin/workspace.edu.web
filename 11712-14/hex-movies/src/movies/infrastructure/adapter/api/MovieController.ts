import { Request, Response } from 'express'
import ApiController from '../../../../api/domain/controller/ApiController'
import MovieUsecasePort from '../../../domain/port/driver/usecase/MovieUsecasePort'

export default class MovieController extends ApiController {
  constructor(private readonly movieUsecase: MovieUsecasePort) {
    super()
  }

  readonly getMovieById = async (req: Request, res: Response) => {
    let { id } = req.params

    if (Array.isArray(id)) {
      id = id[0] ?? ''
    } else {
      id = id ?? ''
    }

    if (!id) {
      return res
        .status(this.STATUS.BAD_REQUEST)
        .json({ message: 'Movie ID is required' })
    }

    id = id.trim().replaceAll(/[<>'"$;\\]/g, '')

    const movie = await this.movieUsecase.getById(id)

    res.status(this.STATUS.OK).json(movie)
  }
}
