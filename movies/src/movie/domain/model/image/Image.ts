import NullObject from '../../../../shared/base/domain/interfaces/NullObject'

export default class Image implements NullObject {
  private readonly id: string
  private thumbnails: string
  private source: string
  isNull: boolean

  constructor(image: ImageInterface) {
    this.id = image.id
    this.thumbnails = image.thumbnails
    this.source = image.source
    this.isNull = false
  }

  getId = (): string => this.id

  getThumbnails = (): string => this.thumbnails

  setThumbnails = (thumbnails: string): void => {
    this.thumbnails = thumbnails
  }

  getSource = (): string => this.source

  setSource = (source: string): void => {
    this.source = source
  }
}

export interface ImageInterface {
  id: string
  thumbnails: string
  source: string
}
