import AbstractPerson from "../person/AbstractPerson"

export default class NullCharacter extends AbstractPerson {
  private gender: string

  constructor() {
    super(
      'not found name in database',
      'not found lastname in database',
    )
    this.gender = 'not found gender in database'
  }

  public isNull(): boolean {
    return false
  }

  public setName(): void { return }
  public setLastname(): void { return }

  public getGender(): string {
    return this.gender
  }  

  public setGender(): void { return }
}