import Person from './Person'

export default class Character extends Person {
  private birthYear: Date

  constructor(
    character: CharacterAttributes
  ) {
    super({
      name: character.name,
      lastname: character.lastname,
    })
    this.birthYear = character.birthYear
  }

  public override isNull = (): boolean => {
    return false
  }

  public getBirthYear = (): Date => {
    return this.birthYear
  }

  public setBirthYear = (birthYear: Date): void => {
    this.birthYear = birthYear
  }

  // Business logic
  public names = (): string => {
    return `${this.name} ${this.lastname}`
  }
}

export interface CharacterAttributes {
  name: string
  lastname: string
  birthYear: Date
}
