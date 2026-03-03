import IMDBRepositoryFactory from './IMDBRepositoryFactory'
import JSONRepositoryFactory from './JSONRepositoryFactory'
import SWAPIRepositoryFactory from './SWAPIRepositoryFactory'

export default abstract class AbstractRepositoryFactory {
  static readonly create = (
    type: RepositoryType,
  ): AbstractRepositoryFactory => {
    switch (type) {
      case RepositoryType.SWAPI:
        return SWAPIRepositoryFactory.create()
      case RepositoryType.IMDB:
        return IMDBRepositoryFactory.create()
      case RepositoryType.JSON:
        return JSONRepositoryFactory.create()
      default:
        throw new Error(`Unsupported repository type: ${type}`)
    }
  }
}

export enum RepositoryType {
  SWAPI = 'SWAPI',
  IMDB = 'IMDB',
  JSON = 'JSON',
}
