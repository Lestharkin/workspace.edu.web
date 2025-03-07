import { Request, Response } from 'express'

import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'
import GetterMovies from './GetterMoves'

export default class MovieControllerExpress
  implements MovieControllerExpressInterface
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  async getMovies(_req: Request, res: Response): Promise<void> {
    const movies = await this.movieUseCase.getMovies()
    const movies_json = JSON.stringify(movies)

    if (movies_json === undefined || movies_json === '[]') {
      res.status(404).send({ message: 'Movies not found' })
      return
    }

    res.status(200).send({ movies: movies_json })
  }

  getMovieById(_req: Request, _res: Response): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async getMovieResume(_req: Request, res: Response): Promise<void> {
    const movies = this.movieUseCase.getMovies()

    const movies_json = JSON.stringify(GetterMovies.resumen(await movies))

    if (movies_json === undefined || movies_json === '[]') {
      res.status(404).send({ message: 'Movies not found' })
    }

    res.status(200).send({ resume: movies_json })
  }
}
