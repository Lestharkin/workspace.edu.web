import NullObject from '../interfaces/NullObject'

export default abstract class Person implements NullObject {
  protected names: string
  protected surnames: string
  abstract isNull: boolean

  constructor(person: PersonInterface) {
    this.names = person.names
    this.surnames = person.surnames
  }

  getNames = (): string => this.names

  setNames = (names: string): void => {
    this.names = names
  }

  getSurnames = (): string => this.surnames

  setSurnames = (surnames: string): void => {
    this.surnames = surnames
  }
}

export interface PersonInterface {
  names: string
  surnames: string
}
