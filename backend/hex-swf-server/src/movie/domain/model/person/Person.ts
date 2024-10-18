export default abstract class Person {
  protected name: string
  protected lastname: string

  constructor(personAttributes: PersonAttributes) {
    this.name = personAttributes.name
    this.lastname = personAttributes.lastname
  }

  public abstract isNull: () => boolean

  public getName = (): string => {
    return this.name
  }

  public getLastname = (): string => {
    return this.lastname
  }

  public setName = (name: string): void => {
    this.name = name
  }

  public setLastname = (lastname: string): void => {
    this.lastname = lastname
  }
}

export interface PersonAttributes {
  name: string
  lastname: string
}