import AbstractImage, { ImageAttributes } from "./AbstractImage"

export default class Image extends AbstractImage {
  constructor (imageAttributes: ImageAttributes) {
    super(imageAttributes)
  }

  public override isNull = (): boolean => {
    return false
  }
}