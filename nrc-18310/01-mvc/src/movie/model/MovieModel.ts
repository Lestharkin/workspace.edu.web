import Movie from '../types/Movie'
import movies_json from '../../../database/movies-2020s.json'

export default class MovieModel {
  public retrieveMovies(): Movie[] {
    const movies =  (movies_json as Movie[]).map((movie) => {
      return {
        price: movie.price,
        title: movie.title,
        year: movie.year,
        score: movie.score,
        cast: movie.cast,
        genres: movie.genres,
        extract: movie.extract,
        thumbnail: `${Environment.getProtocol()}://${Environment.getHost()}:${Environment.getPort()}/api/v1.0/movies/movie/image/${
          movie.thumbnail
        }`,
      }
    })
  }
}
