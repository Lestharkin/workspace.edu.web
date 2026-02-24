import AbstractTrailer from './AbstractTrailer'

export default class Trailer extends AbstractTrailer {
  override readonly isNull = (): boolean => false
}
