import Character from '../../../../domain/model/character/Character'
import NullCharacter from '../../../../domain/model/character/NullCharacter'

export default class CharacterProvider {
  public static readonly get = (characters: string[]): Character[] => {
    return characters.map((character) => {
      const characterNames = character.split(' ')
      const name = characterNames[0] ?? ''
      const lastname = characterNames[1] ?? ''
      if (
        characterNames === undefined ||
        characterNames.length === 0 ||
        name === ''
      ) {
        return new NullCharacter()
      }
      return new Character({
        name: name,
        lastname: lastname,
        // TODO - Implement date validation
        birthYear: new Date(),
      })
    })
  }
}
