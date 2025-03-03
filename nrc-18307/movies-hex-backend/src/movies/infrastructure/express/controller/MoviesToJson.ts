import FullMovieInterface from '../../../domain/api/FullMovieInterface'
import Movie from '../../../domain/movie/Movie'

export default class MovieToJson {
  public static readonly get = (movies: Movie[]): FullMovieInterface[] => {
    const movies_json = movies.map((movie) => {
      return {
        title: movie.getTitle(),
        price: movie.getPrice(),
        year: movie.getYear(),
        genres: movie.getGenres(),
        extract: movie.getExtract(),
        director: {
          names: movie.getDirector().getNames(),
          surnames: movie.getDirector().getSurnames(),
          yearsOfExperience: movie.getDirector().getYearsOfExperience(),
        },
        producer: movie.getProducer().map((producer) => {
          return {
            names: producer.getNames(),
            surnames: producer.getSurnames(),
            budget: producer.getBudget(),
          }
        }),
        age: movie.getAge(),
        image: movie.getImage().map((image) => {
          return {
            name: image.getName(),
            path: image.getPath(),
          }
        }),
        characters: movie.getCharacters().map((character) => {
          return {
            names: character.getNames(),
            surnames: character.getSurnames(),
            birthYear: character.getBirthYear(),
          }
        }),
      }
    })

    return movies_json
  }
}
