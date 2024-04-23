import AbstractPerson from "../person/AbstractPerson"

export default class Character extends AbstractPerson {
  private gender: string

  constructor(name: string, lastname: string, gender: string) {
    super(
      name,
      lastname
    )
    this.gender = gender
  }

  public isNull(): boolean {
    return false
  }

  public getGender(): string {
    return this.gender
  }

  public setGender(gender: string): void {
    this.gender = gender
  }
}