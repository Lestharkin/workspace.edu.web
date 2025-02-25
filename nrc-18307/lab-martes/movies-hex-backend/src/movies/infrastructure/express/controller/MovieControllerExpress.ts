import { Request, Response } from 'express'
import MovieControllerExpressInterface from '../../../domain/interfaces/MovieControllerExpressInterface'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class MovieControllerExpress
  implements MovieControllerExpressInterface
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  getMovies(req: Request, res: Response): void {
    const movies = this.movieUseCase.getMovies()
    
  }
  getMovieById(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }

  
}
