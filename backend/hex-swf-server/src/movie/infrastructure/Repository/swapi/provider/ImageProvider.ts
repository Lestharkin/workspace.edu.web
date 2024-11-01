import NullImage from '../../../../domain/model/image/NullImage'
import Image from '../../../../domain/model/image/Image'

export default class ImageProvider {
  public static get = (name: string, source: string): Image => {
    if (source === '') {
      return new NullImage()
    }
    return new Image({
      name,
      source,
    })
  }
}
