export default abstract class AbstractTrailer {
  protected readonly id: string
  protected source: string

  constructor(id: string, source: string) {
    this.id = id
    this.source = source
  }

  readonly getId = (): string => this.id

  readonly getSource = (): string => this.source

  readonly setSource = (source: string): void => {
    this.source = source
  }
}
