import SWAPI from '../../../swapi/infrastructure/api/SWAPI'
import SWMovieRepositoryPort from '../../domain/port/driven/SWMovieRepositoryPort'
import FilmsToMovies from '../repository/swapi/FilmsToMovies'
import GetterCharacters from '../repository/swapi/GetterCharacters'
import GetterDirector from '../repository/swapi/GetterDirector'
import GetterProducers from '../repository/swapi/GetterProducer'
import SWMovieRepository from '../repository/swapi/SWRepository'

export default class SWRepositoryFactory {
  public static readonly create = (): SWMovieRepositoryPort => {
    const swapi = new SWAPI()

    const getterDirector = new GetterDirector()
    const getterProducers = new GetterProducers()
    const getterCharacters = new GetterCharacters(swapi)

    const filmsToMovies = new FilmsToMovies(
      getterDirector,
      getterProducers,
      getterCharacters
    )
    
    return new SWMovieRepository(swapi, filmsToMovies)
  }
}
