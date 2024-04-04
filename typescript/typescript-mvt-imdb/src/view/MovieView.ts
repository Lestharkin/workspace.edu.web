
import { Request, Response } from 'express'
import MovieModel from '../model/MovieModel'

export default class MovieView {
  constructor (private readonly movieModel: MovieModel) { }

  index = async (_req: Request, res: Response): Promise<void> => {
    const movies = await this.movieModel.getMovies()

    if (movies.length > 0) {
      res.render('IndexTemplate', { movies })
    } else {
      res.render('<h1>Not Movies ahhhhhh!!!</h1>')
    }
  }
}
