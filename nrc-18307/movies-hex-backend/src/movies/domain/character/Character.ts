import AbstractCharacter, { CharacterInterface } from './AbstractCharacter'

export default class Character extends AbstractCharacter {
  constructor(characterInterface: CharacterInterface) {
    super(characterInterface)
  }

  public override isNull = (): boolean => false
  public override toString = (): string => `${this.names} ${this.surnames}`
}
