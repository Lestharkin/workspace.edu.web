import ExpressRouter from "../../../express/route/ExpressRouter"
import CacheRepository from "../../../shared/cache/infrastructure/CacheRepository"
import RedisDBC from "../../../util/redis/RedisDBC/RedisDBC"
import RetrieveMoviesService from "../../application/service/RetrieveMovies/RetrieveMoviesService"
import RetrieveMoviesUseCase from "../../application/usecase/RetrieveMovies/RetrieveMoviesUseCase"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsMovie from "../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../util/StarwarsAPI"
import MovieController from "../express/controller/MovieController"
import MovieRouter from "../express/route/MovieRouter"
import RetrieveMovies from "../repository/RetrieveMovies"
import RetrieveMoviesCache from "../repository/RetrieveMoviesCache"

export enum RouterFactoryTypes {
  RETRIEVE_MOVIES = 'RETRIEVE_MOVIES',
  RETRIEVE_MOVIES_CACHE = 'RETRIEVE_MOVIES_CACHE'
}

export default class MovieFactory {
  public createRouter = async  (routerFactoryTypes: RouterFactoryTypes): Promise<ExpressRouter> => {
    const starwarsAPI = new StarwarsAPI()
    const retrieveMovies = {
      RETRIEVE_MOVIES: (): RetrieveMoviesPort => {
        return new RetrieveMovies(starwarsAPI)
      },
      RETRIEVE_MOVIES_CACHE: async (): Promise<RetrieveMoviesPort> => {
        const url = `redis://localhost:6379`
        const redis = RedisDBC.getInstance(url)
        await redis.connect()
        return new RetrieveMoviesCache(
          starwarsAPI,
          new CacheRepository<StarwarsMovie[]>(
            redis,
            60000
          )
        )
      }
    }
    const retrieveMoviesService = new RetrieveMoviesService(await retrieveMovies[routerFactoryTypes]())
    const retrieveMoviesUseCase = new RetrieveMoviesUseCase(retrieveMoviesService)
    const movieController = new MovieController(retrieveMoviesUseCase)
    return new MovieRouter(movieController)
  }
}