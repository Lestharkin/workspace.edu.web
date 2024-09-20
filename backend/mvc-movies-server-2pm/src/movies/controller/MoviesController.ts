import { Request, Response } from 'express'
import MoviesModel from '../model/MoviesModel'
import path from 'path'
import { promises as fs } from 'fs'

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

  public getMovieImage = async (file: string): Promise<string> => {
    const absolutePath = path.join(__dirname, `../../database/movies/`)
    const defaultImage = 'not-icon.png'
    try {
      await fs.access(absolutePath + file, fs.constants.F_OK)
      const stats = await fs.stat(absolutePath + file)
      if (stats.isFile()) {
        return absolutePath + file
      }
      return absolutePath + defaultImage
    } catch (err) {
      return absolutePath + defaultImage
    }
  }
}
