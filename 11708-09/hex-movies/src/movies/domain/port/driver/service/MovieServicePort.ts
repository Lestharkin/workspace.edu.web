import Movie from '../../../model/movie/Movie'

export default interface MovieServicePort {
  readonly retrieveMovieByTitle: (title: string) => Promise<Movie>
}
