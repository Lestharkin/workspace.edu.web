export default abstract class AbstractPerson {
  protected name: string
  protected lastName: string

  constructor(name: string, lastName: string) {
    this.name = name
    this.lastName = lastName
  }

  public abstract isNull(): boolean

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getLastName(): string {
    return this.lastName
  }

  public getFullName(): string {
    return `${this.name} ${this.lastName}`
  }

}