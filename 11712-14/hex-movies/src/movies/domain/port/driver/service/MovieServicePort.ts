import Movie from '../../../model/movie/Movie'

export default interface MovieServicePort {
  readonly retrieveById: (id: string) => Promise<Movie>
}
