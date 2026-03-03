import Movie from '../../../model/movie/Movie'

export default interface MovieUsecasePort {
  readonly getById: (id: string) => Promise<Movie>
  readonly getAll: () => Promise<Movie[]>
}
