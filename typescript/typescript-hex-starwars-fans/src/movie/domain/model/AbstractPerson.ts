export default abstract class AbstractPerson {
  private name: string
  private lastname: string

  constructor(name: string, lastname: string) {
    this.name = name
    this.lastname = lastname
  }

  public abstract isNull(): boolean

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getLastname(): string {
    return this.lastname
  }

  public getFullName(): string {
    return `${this.name} ${this.lastname}`
  }

}