import Character from "../../domain/model/character/Character"
import Movie from "../../domain/model/movie/Movie"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsAPI from "../../util/StarwarsAPI"

export default class RetrieveMovies implements RetrieveMoviesPort {
  constructor(private readonly starwarsAPI: StarwarsAPI) {}


  public findAll = async (): Promise<Movie[]> => {
    const starwarsMovies = await this.starwarsAPI.fetchAllMovies()
    const movies = starwarsMovies.map(async (starwarsMovie): Promise<Movie> => {
      const starwarsCharacters = await this.starwarsAPI.charactersFromMovies(starwarsMovie)
      const characters = starwarsCharacters.map((starwarsCharacter): Character => {
        const names = starwarsCharacter.name.split(" ")
        const name = names[0]
        const lastname = names[1]
        if(this.starwarsCharacter()) {

        }

        return new Character(
          name,
          lastname,
          starwarsCharacter.gender
        )
      })

    })



  }

  private starwarsCharacter = (value: string): boolean => {
    if(value === null || value === undefined || value === "") {
      return false
    }
    return true
  }
}