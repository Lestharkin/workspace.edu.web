import Character from "../../domain/model/character/Character"
import NullCharacter from "../../domain/model/character/NullCharacter"
import Movie from "../../domain/model/movie/Movie"
import NullMovie from "../../domain/model/movie/NullMovie"
import AbstractPerson from "../../domain/model/person/AbstractPerson"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsMovie from "../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../util/StarwarsAPI"

export default class RetrieveMovies implements RetrieveMoviesPort {
  constructor(private readonly starwarsAPI: StarwarsAPI) {}


  public findAll = async (): Promise<Movie[]> => {
    const starwarsMovies = await this.starwarsAPI.fetchAllMovies()
    const movies = starwarsMovies.map(async (starwarsMovie): Promise<Movie> => {
      if(starwarsMovie === null || starwarsMovie === undefined) {
        return new NullMovie()
      }

      const characters = await this.getCharacters(starwarsMovie)
      const producers = await this.getProducers(starwarsMovie)
      const director = await this.getDirector(starwarsMovie)

      return new Movie(
        starwarsMovie.title,
        starwarsMovie.episode_id,
        starwarsMovie.opening_crawl,
        new Date(starwarsMovie.release_date),
        producers,
        director,
        characters as Character[]
      )
    })

    return await Promise.all(movies)
  }

  private getCharacters = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson[]> => {
    const starwarsCharacters = await this.starwarsAPI.charactersFromMovies(starwarsMovie)
    return starwarsCharacters.map((starwarsCharacter): AbstractPerson => {
      const names = starwarsCharacter.name.split(" ")
      const name = names[0]
      const lastname = names[1]
      if(this.isEmpty(name) || this.isEmpty(lastname)) {
        return new NullCharacter()
      }
      return new Character(
        name,
        lastname,
        starwarsCharacter.gender
      )
    })
  }

  private isEmpty = (value: string): boolean => {
    if(value === null || value === undefined || value === "") {
      return true
    }
    return false
  }

  private getProducers = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson[]> => {

  }

  private getDirector = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson> => {

  }
}