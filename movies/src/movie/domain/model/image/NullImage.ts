import Image from './Image'

export default class NullImage extends Image {
  constructor() {
    super({
      id: 'not-found',
      thumbnails: 'Not found in database',
      source: 'Not found in database ',
    })
    this.isNull = true
  }

  override setThumbnails = (_thumbnails: string): void => {
    throw new Error('Cannot set thumbnails on a NullImage')
  }

  override setSource = (_source: string): void => {
    throw new Error('Cannot set source on a NullImage')
  }
}
