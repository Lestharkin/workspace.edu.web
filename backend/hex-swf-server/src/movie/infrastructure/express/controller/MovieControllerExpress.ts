import { Request, Response } from 'express'

import MovieControllerExpressPort from '../../../domain/port/driver/MovieControllerExpressPort'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class MovieControllerExpress
  implements MovieControllerExpressPort
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  public movies(_req: Request, res: Response): void {
    const movies = this.movieUseCase.getMovies()
    // TODO: validate ALL
    res.status(200).json({ message: 'Hello Movies', data: movies })
  }
}
