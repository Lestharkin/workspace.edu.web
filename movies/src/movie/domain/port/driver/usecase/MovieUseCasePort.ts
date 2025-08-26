import Movie, { MovieInterface } from '../../../model/Movie/Movie'

export default interface MovieUseCasePort {
  register: (movie: Movie) => Promise<Movie>
  search: (filter: MovieInterface) => Promise<Movie[]>
  getById: (id: string) => Promise<Movie>
  getByIdList: (list: string[]) => Promise<Movie[]>
}
