import IMDBRepositoryPort from '../../../domain/port/driven/repository/imdb/IMDBRepositoryPort'
import IMDBRepository from '../../adapter/repository/IMDBRepository'

export default class IMDBRepositoryFactory {
  static readonly create = (): IMDBRepositoryPort => {
    const repository = new IMDBRepository()
    if (!repository) {
      throw new Error('Failed to create IMDBRepository')
    }
    return repository
  }
}
