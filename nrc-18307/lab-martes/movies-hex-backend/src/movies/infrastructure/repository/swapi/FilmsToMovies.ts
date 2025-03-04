import SWMovieInterface from '../../../../swapi/domain/SWMovieInterface'
import Director from '../../../domain/director/Director'
import NullDirector from '../../../domain/director/NullDirector'
import Movie from '../../../domain/movie/Movie'

export default class FilmsToMovies {
  public get = (swMovieInterface: SWMovieInterface[]): Movie[] => {
    const movies = swMovieInterface.map((swMovie) => {
      return new Movie({
        title: swMovie.title,
        price: 0,
        year: parseInt(swMovie.release_date),
        genres: '',
        extract: swMovie.opening_crawl,
        director: this.getDirector(swMovie.director),
        producer: swMovie.producer,
        age: 0,
        image: [],
        characters: []
      })
    })
  }

  private readonly getDirector = (director: string): Director => {
    const directorNames = director.split(' ')

    if(directorNames[0] === undefined || directorNames[0] === null || directorNames[0] === '') {
      return new NullDirector()
    }

    return new Director({
      names: directorNames[0] ?? "",
      surnames: directorNames[1] ?? "",
      yearsOfExperience: 0
    })
  }
}
