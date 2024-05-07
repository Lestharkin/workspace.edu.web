import { Request, Response } from "express"
import RetrieveMoviesUseCasePort from "../../../domain/port/driver/RetrieveMovies/RetrieveMoviesUseCasePort"

export default class MovieController {
  constructor(private readonly retrieveMoviesUseCase: RetrieveMoviesUseCasePort) {}

  public getMovies = (_req: Request, res: Response): void => {
    const data = this.retrieveMoviesUseCase.getMovies()
    data.then((data) => {
      const movies = data.map((movie) => JSON.stringify(movie))
      res.status(200).json({ movies })
    }).catch((error) => {
      if(error instanceof Error) {
        console.error({ error: error.stack })
      }
      res.status(500).json({ error: 'Error occurred while retrieving movies'})
    })    
  }
}