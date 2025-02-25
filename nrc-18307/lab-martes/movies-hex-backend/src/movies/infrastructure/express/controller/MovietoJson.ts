import FullMovieInterface from '../../../domain/api/FullMovieInterface'
import Movie from '../../../domain/movie/Movie'

export default class MovieToJson {
  public static moviestoJson = (movies: Movie[]): FullMovieInterface[] => {
    const movies_json = movies.map((movie) => {
      return {
        title: movie.getTitle(),
        price: movie.getPrice(),
        year: movie.getYear(),
        genres: movie.getGenres(),
        extract: movie.getExtract(),
        director: {
          name: movie.getDirector().getNames(),
          surname: movie.getDirector().getSurnames(),
          age: movie.getDirector().getYearsOfExperience(),
        },
        producer: movie.getProducer().map((producer) => {
          return {
            name: producer.getNames(),
            surname: producer.getSurnames(),
            age: producer.getBudget(),
          }
        }),
        age: movie.getAge(),
        image: movie.getImage().map((image) => {
          return {
            url: image.getName(),
            alt: image.getPath(),
          }
        }),
        characters: movie.getCharacters().map((character) => {
          return {
            name: character.getNames(),
            surname: character.getSurnames(),
            age: character.getBirthYear(),
          }
        }),
      }
    })

    return movies_json
  }
}
