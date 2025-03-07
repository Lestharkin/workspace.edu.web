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

  public get = (films: SWMovieInterface[]): Promise<Movie[]> => {
    const movies = films.map(async (film) => {
      return new Movie({
        title: film.title,
        price: 0,
        year: Number(film.release_date),
        genres: '',
        extract: film.opening_crawl,
        director: this.getterDirector.get(film.director),
        producer: this.getterProducers.get(film.producer),
        age: 0,
        image: [],
        characters: await this.getterCharacters.get(film),
      })
    })

    return Promise.all(movies)
  }
}
