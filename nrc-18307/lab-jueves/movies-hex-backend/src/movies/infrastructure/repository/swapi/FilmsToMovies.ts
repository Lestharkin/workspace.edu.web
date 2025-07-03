import SWMovieInterface from '../../../../swapi/domain/SWMovieInterface'
import Movie from '../../../domain/movie/Movie'
import GetterCharacters from './GetterCharacters'
import GetterDirector from './GetterDirector'
import GetterProducers from './GetterProducers'

export default class FilmsToMovies {
  constructor(
    private readonly getterDirector: GetterDirector,
    private readonly getterProducers: GetterProducers,
    private readonly getterCharacters: GetterCharacters
  ) {}

  public get = (swMovieInterface: SWMovieInterface[]): Promise<Movie[]> => {
    const movies = swMovieInterface.map(async (swMovie) => {
      return new Movie({
        title: swMovie.title,
        price: 0,
        year: parseInt(swMovie.release_date),
        genres: '',
        extract: swMovie.opening_crawl,
        director: this.getterDirector.get(swMovie.director),
        producer: this.getterProducers.get(swMovie.producer),
        age: 0,
        image: [],
        characters: await this.getterCharacters.get(swMovie),
      })
    })
    return Promise.all(movies)
  }
}
