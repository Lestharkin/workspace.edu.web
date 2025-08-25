import { Request, Response } from 'express'
import MovieAbstractController from '../../../../domain/api/MovieAbstractController'
import MovieUseCasePort from '../../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieController extends MovieAbstractController {
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly getById = async (req: Request, res: Response): Promise<void> => {
    console.log('Movie route')
    try {
      const { id } = req.params
      if (!id) {
        res
          .status(this.HTTPStatusCode.BAD_REQUEST)
          .json({ error: 'Invalid movie ID' })
        return
      }

      const movie = await this.movieUseCase.getById(id)

      res.status(this.HTTPStatusCode.OK).json(movie)
    } catch (error) {
      console.error('Error getting movie by ID:', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }

  readonly getByIdList = async (req: Request, res: Response): Promise<void> => {
    try {
      const { idList } = req.params

      if (!idList) {
        res
          .status(this.HTTPStatusCode.BAD_REQUEST)
          .json({ error: 'Invalid idList' })
        return
      }

      const idListArray = idList.split(',').map((id) => id.trim())

      const movies = await this.movieUseCase.getByIdList(idListArray)

      res.status(this.HTTPStatusCode.OK).json(movies)
    } catch (error) {
      console.error('Error getting movie by ID list:', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }
}
