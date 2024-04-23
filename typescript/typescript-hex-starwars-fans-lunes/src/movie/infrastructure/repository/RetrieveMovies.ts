import Movie from "../../domain/model/movie/Movie"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"

export default class RetrieveMovies implements RetrieveMoviesPort {
  public findAll = (): Movie[] => {
    return 
  }
}