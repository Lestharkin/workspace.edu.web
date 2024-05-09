import Character from "../../../domain/model/character/Character"
import NullCharacter from "../../../domain/model/character/NullCharacter"
import AbstractPerson from "../../../domain/model/person/AbstractPerson"
import { isEmpty } from "../../../helper/Validator"
import MovieAbstractProvider from "./MovieAbstractProvider"

export default class MovieCharacterProvider extends MovieAbstractProvider {
  public get = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson[]> => {
    const starwarsCharacters = await this.starwarsAPI.charactersFromMovies(starwarsMovie)
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
}