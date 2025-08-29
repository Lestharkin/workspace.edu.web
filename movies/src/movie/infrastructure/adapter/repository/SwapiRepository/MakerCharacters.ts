import { SwapiDBC } from '../../../../../shared/Shared'
import Category from '../../../../domain/model/character/Category'
import Character from '../../../../domain/model/character/Character'
import NullCharacter from '../../../../domain/model/character/NullCharacter'

export default class MakerCharacters {
  constructor(private readonly swapiDBC: SwapiDBC) {}

  readonly make = async (characters: string[]): Promise<Character[]> => {
    return Promise.all(
      characters.map(async (endpoint) => {
        const character = await this.swapiDBC.get(endpoint)

        if (!character) {
          return new NullCharacter()
        }

        const data = character.name.split(' ')

        return new Character({
          id: character.url,
          names: data[0],
          surnames: data[1],
          category: Category.UNKNOWN,
        })
      })
    )
  }
}
