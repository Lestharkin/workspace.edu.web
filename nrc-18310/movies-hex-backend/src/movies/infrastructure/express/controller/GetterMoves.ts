import MovieResumeInterface from '../../../domain/api/MovieResumeInterface'
import Movie from '../../../domain/movie/Movie'

export default class GetterMovies {
  public static resumen(movies: Movie[]): MovieResumeInterface[] {
    return movies.map((movie) => {
      return {
        title: movie.getTitle(),
        genres: movie.getGenres(),
        director: {
          names: movie.getDirector().getNames(),
          surnames: movie.getDirector().getSurnames(),
          yearsOfExperience: movie.getDirector().getYearsOfExperience(),
        },
        characters: movie.getCharacters().map((character) => {
          return {
            names: character.getNames(),
            surnames: character.getSurnames(),
            birthYear: character.getBirthYear(),
          }
        }),
      }
    })
  }
}
