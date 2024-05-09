import StarwarsCharacter from "../../../domain/starwars/StarwarsCharacter"
import StarwarsMovie from "../../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../../util/StarwarsAPI"
import MovieAbstractCharacterProvider from "./MovieAbstractCharacterProvider"

export default class MovieCharacterProvider extends MovieAbstractCharacterProvider {
  constructor(private readonly starwarsAPI: StarwarsAPI) {
    super()
  }

  protected charactersFromMovies = async (starwarsMovie: StarwarsMovie): Promise<StarwarsCharacter[]> => {
    return await this.starwarsAPI.charactersFromMovies(starwarsMovie)
  }
}