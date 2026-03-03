import SWAPIRepositoryPort from '../../../domain/port/driven/repository/swapi/SWAPIRepositoryPort'
import SWAPIRepository from '../../adapter/repository/SWAPIRepository'
import AbstractRepositoryFactory from './AbstractRepositoryFactory'

export default class SWAPIRepositoryFactory extends AbstractRepositoryFactory {
  static override readonly create = (): SWAPIRepositoryPort => {
    const repository = new SWAPIRepository()
    if (!repository) {
      throw new Error('Failed to create SWAPIRepository')
    }
    return repository
  }
}
