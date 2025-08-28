import Repository from '../../../../../../shared/domain/interfaces/Repository'
import Movie from '../../../../model/Movie/Movie'

export default interface RapidRepositoryPort extends Repository<string, Movie> {
  findByTitle: (title: string) => Promise<Movie[]>
}
