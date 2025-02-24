export default abstract class Person {
  protected names: string
  protected surnames: string
  private readonly namesPattern = /^[a-zA-Z\s]*$/

  constructor(personInterface: PersonInterface) {
    this.names = personInterface.names
    this.surnames = personInterface.surnames
  }

  public abstract isNull(): boolean
  public abstract toString(): string

  public getNames = (): string => this.names

  public getSurnames = (): string => this.surnames

  public setNames = (names: string): void => {
    if (this.validateNames(names)) {
      return
    }
    this.names = names
  }

  public setSurnames = (surnames: string): void => {
    if (this.validateNames(surnames)) {
      return
    }
    this.surnames = surnames
  }

  private readonly validateNames = (names: string): boolean =>
    names === '' ||
    names.length < 1 ||
    names.length > 80 ||
    this.namesPattern.exec(names) === null
}

interface PersonInterface {
  names: string
  surnames: string
}

export { PersonInterface }
