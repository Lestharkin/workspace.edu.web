import { Request, Response } from 'express'

import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class MovieControllerExpress
  implements MovieControllerExpressInterface
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  public getMovies = (req: Request, res: Response): void => {
    const movies =  this.movieUseCase.getMovies()

  }

  public getMovieById = (req: Request, res: Response): void => {}
}
