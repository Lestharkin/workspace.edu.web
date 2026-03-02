export default class AbstractStudio {
  protected readonly id: string
  protected name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }

  readonly getId = (): string => this.id

  readonly getName = (): string => this.name

  readonly setName = (name: string): void => {
    this.name = name
  }
}
