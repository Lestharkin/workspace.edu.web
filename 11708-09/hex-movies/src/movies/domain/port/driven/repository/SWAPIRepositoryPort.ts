import FinderRepository from '../../../../../shared/domain/FinderRepository'
import Movie from '../../../model/movie/Movie'

export default interface SWAPIRepositoryPort extends FinderRepository<
  string,
  Movie
> {
  readonly findByTitle: (title: string) => Promise<Movie>
}
