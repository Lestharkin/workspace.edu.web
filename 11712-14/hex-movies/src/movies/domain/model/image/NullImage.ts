import AbstractImage from './AbstractImage'

export default class NullImage extends AbstractImage {
  readonly isNull = (): boolean => true

  constructor() {
    super('not found', 'not found', 'not found')
  }
}
