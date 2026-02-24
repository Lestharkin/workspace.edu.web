export default abstract class AbstractImage {
  protected readonly id: string
  protected thumbnails: string
  protected source: string

  constructor(id: string, thumbnails: string, source: string) {
    this.id = id
    this.thumbnails = thumbnails
    this.source = source
  }

  readonly getThumbnails = (): string => {
    return this.thumbnails
  }

  readonly getSource = (): string => {
    return this.source
  }

  readonly setThumbnails = (thumbnails: string): void => {
    this.thumbnails = thumbnails
  }

  readonly setSource = (source: string): void => {
    this.source = source
  }
}
