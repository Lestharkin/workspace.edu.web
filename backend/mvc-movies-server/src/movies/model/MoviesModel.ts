import movies_json from '../../database/movies-2020s.json'
import Environment from '../shared/Environment'
import Movie from '../types/Movie'
import path from 'path'
import { promises as fs } from 'fs'

export default class MoviesModel {
  public fetchMovies = (): Movie[] => {
    const movies = (movies_json as Movie[]).map((movie) => {
      return {
        price: movie.price,
        title: movie.title,
        year: movie.year,
        score: movie.score,
        cast: movie.cast,
        genres: movie.genres,
        extract: movie.extract,
        thumbnail: `${Environment.getDomain()}/api/v1.0/rental/movies/movie/image/${
          movie.thumbnail
        }`,
      }
    })
    return movies
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
