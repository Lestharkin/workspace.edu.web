import AbstractTrailer from './AbstractTrailer'

export default class NullTrailer extends AbstractTrailer {
  override readonly isNull = (): boolean => true

  constructor() {
    super('not found', 'not found')
  }
}
