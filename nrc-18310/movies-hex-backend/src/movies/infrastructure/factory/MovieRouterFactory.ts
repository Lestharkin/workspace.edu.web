import RouterExpressInterface from '../../../express/domain/RouterExpressInterface'
import SWAPI from '../../../swapi/infrastructure/SWAPI'
import MovieService from '../../application/service/MovieService'
import MovieUseCase from '../../application/usecase/MovieUseCase'
import MovieControllerExpress from '../express/controller/MovieControllerExpress'
import MovieRouterExpress from '../express/router/MovieRouterExpress'
import FilmsToMovies from '../repository/swapi/FilmsToMovies'
import GetterCharacters from '../repository/swapi/GetterCharacters'
import GetterDirector from '../repository/swapi/GetterDirector'
import GetterProducers from '../repository/swapi/GetterProducers'
import SWMovieRepository from '../repository/swapi/SWMovieRepository'

export default class MovieRouterFactory {
  public static create(): RouterExpressInterface {
    const swapi = new SWAPI()

    const getterDirector = new GetterDirector()
    const getterProducers = new GetterProducers()
    const getterCharacters = new GetterCharacters(swapi)

    const filmsToMovies = new FilmsToMovies(
      getterDirector,
      getterProducers,
      getterCharacters
    )

    const swMovieRepository = new SWMovieRepository(swapi, filmsToMovies)

    const movieService = new MovieService(swMovieRepository)

    const movieUseCase = new MovieUseCase(movieService)

    const movieController = new MovieControllerExpress(movieUseCase)

    return new MovieRouterExpress(movieController)
  }
}
