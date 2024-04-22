import Character from "../domain/starwars/Character"
import Movie from "../domain/starwars/Movie"

export default class StarwarsAPI {
  private uriFilms = 'https://swapi.dev/api/films/'
  private uriPeople = 'https://swapi.dev/api/people/'


  public async fetchAllMovies(): Promise<Movie[]> {
    let movies: Movie[] = []
    const response = await fetch(this.uriFilms)
    const data = await response.json()
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
    return movies
  }

  public charactersFromMovies(movie: Movie): Character[] {
    let characters: Character[] = []
    movie.characters.forEach(async (character: string) => {
      const response = await fetch(character)
      const data = await response.json()
      characters.push({
        name: data.name,
        gender: data.gender
      })      
  })
  return characters
  }
}