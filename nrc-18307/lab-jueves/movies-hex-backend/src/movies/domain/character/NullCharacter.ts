import Character from './Character'

export default class NullCharacter extends Character {
  constructor() {
    super({ names: '', surnames: '', birthYear: new Date('1900') })
  }

  public override isNull = (): boolean => true
  public override toString = (): string => 'NullCharacter'

  public override setNames = (_names: string): void => {
    return
  }

  public override setSurnames = (_surnames: string): void => {
    return
  }

  public override setBirthYear = (_birthYear: Date): void => {
    return
  }
}
