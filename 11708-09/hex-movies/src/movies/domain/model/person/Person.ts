export default abstract class Person {
  protected readonly id: string
  protected names: string
  protected surnames: string

  constructor(id: string, names: string, surnames: string) {
    this.id = id
    this.names = names
    this.surnames = surnames
  }

  readonly getId = (): string => this.id

  readonly getNames = (): string => this.names

  readonly getSurnames = (): string => this.surnames

  readonly setNames = (names: string): void => {
    this.names = names
  }

  readonly setSurnames = (surnames: string): void => {
    this.surnames = surnames
  }
}
