import Character from "./Character"

export default class NullCharacter extends Character {
  constructor() {
    super({
      name: 'Unknown',
      lastname: 'Unknown',
      birthYear: new Date()
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setName = (_name: string): void => {
    return
  }

  public override setLastname = (_lastname: string): void => {
    return
  }

  public override setBirthYear = (_birthYear: Date): void => {
    return
  }

}