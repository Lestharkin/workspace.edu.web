import Movie from '../types/Movie'
import movies_json from '../../../database/movies-2020s.json'

export default class MovieModel {
  public retrieveMovies(): Movie[] {
    return movies_json as Movie[]
  }
}
