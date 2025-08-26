import Movie, { MovieInterface } from '../../../model/Movie/Movie'

export default interface MovieUseCasePort {
  register: (movie: Movie) => Movie
  search: (filter: MovieInterface) => Movie[]
  getById: (id: string) => Movie
  getByIdList: (list: string[]) => Movie[]
}
