import MovieUseCase from '../../application/usecase/MovieUseCase'
import MovieControllerExpress from '../express/controller/MovieControllerExpress'
import MovieRouterExpress from '../express/router/MovieRouterExpress'
import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'
import MovieService from '../../application/service/MovieService'
import SWMovieRepository from '../repository/swapi/SWMovieRepository'
import FilmsToMovies from '../repository/swapi/FilmsToMovies'
import SWAPI from '../../../swapi/infrastructure/api/SWAPI'
import GetterDirector from '../repository/swapi/GetterDirector'
import GetterProducers from '../repository/swapi/GetterProducers'
import GetterCharacters from '../repository/swapi/GetterCharacters'

export default class MovieRouterFactory {
  public static create(): RouterExpressInterface {
    const swapi = new SWAPI()
    const filmsToMovies = new FilmsToMovies(
      new GetterDirector(),
      new GetterProducers(),
      new GetterCharacters(swapi)
    )

    const swMovieRepository = new SWMovieRepository(swapi, filmsToMovies)

    const movieService = new MovieService(swMovieRepository)

    const movieUseCase = new MovieUseCase(movieService)

    const movieController = new MovieControllerExpress(movieUseCase)

    return new MovieRouterExpress(movieController)
  }
}
