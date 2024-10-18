export default abstract class AbstractImage {
  private name: string
  private source: string

  constructor(imageAttributes: ImageAttributes) {
    this.name = imageAttributes.name
    this.source = imageAttributes.source
  }

  public abstract isNull: () => boolean

  public getName = (): string => {
    return this.name
  }

  public getSource = (): string => {
    return this.source
  }

  public setName = (name: string): void => {
    this.name = name
  }

  public setSource = (source: string): void => {
    this.source = source
  }
}

export interface ImageAttributes {
  name: string
  source: string
}