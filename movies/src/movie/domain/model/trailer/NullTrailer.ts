import Trailer from './Trailer'

export default class NullTrailer extends Trailer {
  constructor() {
    super({
      id: 'not-found',
      source: 'Not found in database',
    })
    this.isNull = true
  }

  override setSource = (_source: string): void => {
    throw new Error('Cannot set source on a NullTrailer')
  }
}
