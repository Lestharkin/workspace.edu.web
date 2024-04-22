import Movie from "../domain/starwars/Movie"

export default class StarwarsAPI {
  private uriFilms = 'https://swapi.dev/api/films/'
  private uriPeople = 'https://swapi.dev/api/people/'


  public fetchAllMovies(): Movie[] {
    let movies: Movie[] = []
    fetch(this.uriFilms)
    .then((response) => response.json())
    .then((data) => {
      movies = data.results.map((movie: any) => {
        return {
          title: movie.title,
          episode_id: movie.episode_id,
          opening_crawl: movie.opening_crawl,
          release_date: movie.release_date,
          director: movie.director,
          producer: movie.producer,
          characters: movie.characters
        }
      })
    })
    return movies
  }

  public charactersFromMovies(url: string) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results
    })
  }
}