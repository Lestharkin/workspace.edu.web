export default abstract class AbstractImage {
  protected name: string
  protected path: string

  constructor(imageInterface: ImageInterface) {
    this.name = imageInterface.name
    this.path = imageInterface.path
  }

  public abstract isNull(): boolean

  public getName = (): string => this.name

  public getPath = (): string => this.path

  public setName = (name: string): void => {
    this.name = name
  }

  public setPath = (path: string): void => {
    this.path = path
  }
}

interface ImageInterface {
  name: string,
  path: string
}

export { ImageInterface }