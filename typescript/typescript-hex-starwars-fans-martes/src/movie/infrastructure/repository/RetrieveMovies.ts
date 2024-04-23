import Movie from "../../domain/model/movie/Movie"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsAPI from "../../util/StarwarsAPI"

export default class RetrieveMovies implements RetrieveMoviesPort {
  private starwarsAPI: StarwarsAPI
  
  public findAll = (): Movie[] => {
    return 
  }
}