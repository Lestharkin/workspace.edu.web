import ExpressRouter from "../../../express/route/ExpressRouter"
import RetrieveMoviesService from "../../application/service/RetrieveMovies/RetrieveMoviesService"
import RetrieveMoviesUseCase from "../../application/usecase/RetrieveMovies/RetrieveMoviesUseCase"
import StarwarsAPI from "../../util/StarwarsAPI"
import MovieController from "../express/controller/MovieController"
import MovieRouter from "../express/route/MovieRouter"
import RetrieveMovies from "../repository/RetrieveMovies"

export default class MovieFactory {
  public createRouter = (): ExpressRouter => {
    const starwarsAPI = new StarwarsAPI()
    const retrieveMovies = new RetrieveMovies(starwarsAPI)
    const retrieveMoviesService = new RetrieveMoviesService(retrieveMovies)
    const retrieveMoviesUseCase = new RetrieveMoviesUseCase(retrieveMoviesService)
    const movieController = new MovieController(retrieveMoviesUseCase)
    return new MovieRouter(movieController)
  }
}