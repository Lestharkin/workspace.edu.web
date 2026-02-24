import AbstractTrailer from './AbstractTrailer'

export default class NullTrailer extends AbstractTrailer {
  constructor() {
    super('not found', 'not found')
  }
}
