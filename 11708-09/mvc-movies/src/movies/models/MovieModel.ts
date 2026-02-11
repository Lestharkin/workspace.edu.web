import movies_json from '../../../database/movies-2020s.json'
import Movie from '../types/Movie'

export default class MovieModel {
  readonly fetchMovies = async (): Promise<Movie[]> => {
    const movies = movies_json as Movie[]
    if (!movies) {
      return []
    }
    return movies
  }
}
