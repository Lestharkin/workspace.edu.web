import SWAPIInterface from '../../../../swapi/domain/SWAPIInterface'
import SWMovieInterface from '../../../../swapi/domain/SWMovieInterface'
import Character from '../../../domain/character/Character'
import NullCharacter from '../../../domain/character/NullCharacter'

export default class GetterCharacters {
  constructor(private readonly swapi: SWAPIInterface) {}

  public readonly get = async (
    swMovie: SWMovieInterface
  ): Promise<Character[]> => {
    const swCharacters = await this.swapi.fetchSWCharacters(swMovie)   

    if (swCharacters === undefined || swCharacters === null) {
      return Promise.resolve([])
    }

    const characters = swCharacters.map((swCharacter) => {
      const characterNames = swCharacter.name.split(' ')

      if (
        characterNames[0] === undefined ||
        characterNames[0] === null ||
        characterNames[0] === ''
      ) {
        return new NullCharacter()
      }

      return new Character({
        names: characterNames[0] ?? '',
        surnames: characterNames[1] ?? '',
        birthYear: new Date('1978'),
      })
    })

    return Promise.resolve(characters)
  }
}
