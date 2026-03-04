import FinderRepository from '../../../../shared/domain/FinderRepository'
import Movie from '../../../domain/model/movie/Movie'
import JSONrepositoryFactory from './JSONrepositoryFactory'
import SWAPIRepositoryFactory from './SWAPIRepositoryFactory'

export default abstract class AbstractFinderFactory {
  static readonly create = (
    type: FinderType,
  ): FinderRepository<string, Movie> => {
    switch (type) {
      case FinderType.JSON:
        return JSONrepositoryFactory.create()
      case FinderType.SWAPI:
        return SWAPIRepositoryFactory.create()
      default:
        throw new Error(`Unknown finder type: ${type}`)
    }
  }
}

export enum FinderType {
  JSON = 'JSON',
  SWAPI = 'SWAPI',
}
