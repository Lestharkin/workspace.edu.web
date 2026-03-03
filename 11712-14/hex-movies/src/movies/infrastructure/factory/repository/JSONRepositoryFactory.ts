import JSONRepositoryPort from '../../../domain/port/driven/repository/json/JSONRepositoryPort'
import JSONRepository from '../../adapter/repository/JSONRepository'
import AbstractRepositoryFactory from './AbstractRepositoryFactory'

export default class JSONRepositoryFactory extends AbstractRepositoryFactory {
  static override readonly create = (): JSONRepositoryPort => {
    const repository = new JSONRepository()
    if (!repository) {
      throw new Error('Failed to create JSONRepository')
    }
    return repository
  }
}
