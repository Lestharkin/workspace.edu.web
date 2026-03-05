import Movie from '../../../model/movie/Movie'
import MovieFinderRepositoryPort from './MovieFinderRepositoryPort'

export default interface SWAPIRepositoryPort extends MovieFinderRepositoryPort<
  string,
  Movie
> {}
