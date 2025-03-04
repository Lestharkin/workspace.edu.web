import SWMovieInterface from '../../../../swapi/domain/SWMovieInterface'
import Movie from '../../../domain/movie/Movie'

export default class FilmsToMovies {
  public static get = (swMovieInterface: SWMovieInterface[]): Movie[] => {}
}
