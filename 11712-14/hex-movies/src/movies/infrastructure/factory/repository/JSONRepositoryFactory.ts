import JSONRepositoryPort from '../../../domain/port/driven/repository/json/JSONRepositoryPort'
import JSONRepository from '../../adapter/repository/JSONRepository'

export default class JSONRepositoryFactory {
  static readonly create = (): JSONRepositoryPort => {
    const repository = new JSONRepository()
    if (!repository) {
      throw new Error('Failed to create JSONRepository')
    }
    return repository
  }
}
