import SWAPIRepositoryPort from '../../../domain/port/driven/repository/swapi/SWAPIRepositoryPort'
import SWAPIRepository from '../../adapter/repository/SWAPIRepository'

export default class SWAPIRepositoryFactory {
  static readonly create = (): SWAPIRepositoryPort => {
    const repository = new SWAPIRepository()
    if (!repository) {
      throw new Error('Failed to create SWAPIRepository')
    }
    return repository
  }
}
