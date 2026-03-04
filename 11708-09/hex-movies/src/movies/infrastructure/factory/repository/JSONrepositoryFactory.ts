import JSONrepositoryPort from '../../../domain/port/driven/repository/JSONrepositoryPort'
import JSONrepository from '../../adapter/repository/JSONrepository'

export default class JSONrepositoryFactory {
  static readonly create = (): JSONrepositoryPort => {
    const repository = new JSONrepository()
    if (!repository) {
      throw new Error('Failed to create JSONrepository')
    }
    return repository
  }
}
