import IMDBRepositoryPort from '../../../domain/port/driven/repository/imdb/IMDBRepositoryPort'
import IMDBRepository from '../../adapter/repository/IMDBRepository'
import AbstractRepositoryFactory from './AbstractRepositoryFactory'

export default class IMDBRepositoryFactory extends AbstractRepositoryFactory {
  static override readonly create = (): IMDBRepositoryPort => {
    const repository = new IMDBRepository()
    if (!repository) {
      throw new Error('Failed to create IMDBRepository')
    }
    return repository
  }
}
