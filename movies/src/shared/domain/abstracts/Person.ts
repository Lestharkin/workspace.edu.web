import NullObject from '../interfaces/NullObject'

export default abstract class Person implements NullObject {
  protected id: string
  protected names: string
  protected surnames: string
  abstract isNull: boolean

  constructor(person: PersonInterface) {
    this.id = person.id
    this.names = person.names
    this.surnames = person.surnames
  }

  getId = (): string => this.id

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
  id: string
  names: string
  surnames: string
}
