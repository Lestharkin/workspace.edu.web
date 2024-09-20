import { Request, Response } from 'express'
import MoviesModel from '../model/MoviesModel'


export default class MoviesController {
  constructor(private readonly moviesModel: MoviesModel) {}

  public getMovies = (_req: Request, res: Response) => {
    const movies = this.moviesModel.fetchMovies()
    if (movies.length === 0) {
      res.status(200).json({ message: 'No movies found' })
      return
    }
    res.status(200).json(movies)
  }

  public getMovieImage = async (req: Request, res: Response) => {
    const id  = req.params['id']
    res.status(200).sendFile(
      await this.moviesModel.getMovieImage(id ?? '')
    )
  }
  
}
