import AbstractImage, { ImageInterface } from './AbstractImage'

export default class Image extends AbstractImage {
  constructor(imageInterface: ImageInterface) {
    super({
      name: imageInterface.name,
      path: imageInterface.path,
    })
  }

  public isNull = (): boolean => false
}
