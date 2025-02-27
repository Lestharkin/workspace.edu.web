import { Request, Response } from 'express'

import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'
import MovieToJson from './MovieToJson'

export default class MovieControllerExpress
  implements MovieControllerExpressInterface
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  public getMovies = (_req: Request, res: Response): void => {
    const movies = this.movieUseCase.getMovies()
    const movies_json = MovieToJson.get(movies)

    if(movies_json.length === 0) {
      res.status(404).json({ message: 'Movies not found' })
    }

    res.status(200).json({movies: movies_json})
  }

  public getMovieById = (_req: Request, _res: Response): void => {}
}
