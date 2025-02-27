import { Request, Response } from 'express'

import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'

export default class MovieControllerExpress
  implements MovieControllerExpressInterface
{
  getMovies(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  getMovieById(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
}
