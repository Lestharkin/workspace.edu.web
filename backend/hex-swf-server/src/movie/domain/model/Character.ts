import Person from './Person'

export default class Character extends Person {
  private birthYear: Date

  constructor() {
    super()
  }

  public names = (): string => {
    return `${this.name} ${this.lastname}`
  }
}
