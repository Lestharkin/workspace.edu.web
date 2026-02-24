import AbstractImage from './AbstractImage'

export default class NullImage extends AbstractImage {
  constructor() {
    super('not found', 'not found', 'not found')
  }

  readonly isNull = (): boolean => true
}
