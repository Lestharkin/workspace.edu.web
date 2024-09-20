import movies from '../../database/movies-2020s.json'
import Movie from '../types/Movie'

export default class MoviesModel {
  public fetchMovies = (): Movie[] => {
    return movies as Movie[]
  }
}
