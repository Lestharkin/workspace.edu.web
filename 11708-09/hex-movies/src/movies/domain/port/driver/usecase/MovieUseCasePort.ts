import Movie from '../../../model/movie/Movie'

export default interface MovieUseCasePort {
  readonly getMovieByTitle: (title: string) => Promise<Movie>
}
