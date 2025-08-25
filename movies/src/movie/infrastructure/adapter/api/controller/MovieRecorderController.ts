import { Request, Response } from 'express'
import MovieAbstractController from '../../../../domain/api/MovieAbstractController'
import MovieUseCasePort from '../../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieRecorderController extends MovieAbstractController {
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly register = async (req: Request, res: Response): Promise<void> => {
    try {
      const movieData = req.body

      const movie = await this.movieUseCase.register(movieData)
      if (movie.isNull) {
        res
          .status(this.HTTPStatusCode.BAD_REQUEST)
          .json({ error: 'Invalid movie data' })
        return
      }

      res.status(this.HTTPStatusCode.CREATED).json(movie)
    } catch (error) {
      console.error('Error registering movie:', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }
}
