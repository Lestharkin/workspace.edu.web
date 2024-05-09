import Character from "../../../domain/model/character/Character"
import NullCharacter from "../../../domain/model/character/NullCharacter"
import AbstractPerson from "../../../domain/model/person/AbstractPerson"
import StarwarsCharacter from "../../../domain/starwars/StarwarsCharacter"
import StarwarsMovie from "../../../domain/starwars/StarwarsMovie"
import { isEmpty } from "../../../helper/Validator"
import MovieAbstractProvider from "./MovieAbstractProvider"

export default abstract class MovieAbstractCharacterProvider extends MovieAbstractProvider {
  public get = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson[]> => {
    const starwarsCharacters = await this.charactersFromMovies(starwarsMovie)
    return starwarsCharacters.map((starwarsCharacter): AbstractPerson => {
      const {name, lastname} = this.splitNames(starwarsCharacter.name)
      if(isEmpty(name) || isEmpty(lastname)) {
        return new NullCharacter()
      }
      return new Character(
        name,
        lastname,
        starwarsCharacter.gender
      )
    })
  }

  protected abstract charactersFromMovies: (starwarsMovie: StarwarsMovie) => Promise<StarwarsCharacter[]>
}