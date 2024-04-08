
import { Request, Response } from 'express'
import MovieModel from '../model/MovieModel'

export default class MovieView {
  constructor (private readonly movieModel: MovieModel) { }

  index = (_req: Request, res: Response): void => {
    const moviesModel = this.movieModel.getMovies()
    void moviesModel.then((movies) => {
      if (movies.length > 0) {
        res.render('IndexTemplate', { movies })
      } else {
        res.render('<h1>Not Movies ahhhhhh!!!</h1>')
      }
    })
  }
}
