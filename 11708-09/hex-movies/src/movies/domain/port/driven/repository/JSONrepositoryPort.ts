import Movie from '../../../model/movie/Movie'
import MovieFinderRepositoryPort from './MovieFinderRepositoryPort'

export default interface JSONrepositoryPort extends MovieFinderRepositoryPort<
  string,
  Movie
> {}
