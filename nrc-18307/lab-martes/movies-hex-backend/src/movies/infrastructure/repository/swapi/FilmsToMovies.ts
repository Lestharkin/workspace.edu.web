import SWMovieInterface from '../../../../swapi/domain/SWMovieInterface'
import Movie from '../../../domain/movie/Movie'
import GetterDirector from './GetterDirector'
import GetterProducers from './GetterProducer'

export default class FilmsToMovies {
  constructor(private readonly getterDirector: GetterDirector,
    private readonly getterProducers: GetterProducers
  ) {}

  public get = (swMovieInterface: SWMovieInterface[]): Movie[] => {
    const movies = swMovieInterface.map((swMovie) => {
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
        characters: [],
      })
    })
    return movies
  }  
}
