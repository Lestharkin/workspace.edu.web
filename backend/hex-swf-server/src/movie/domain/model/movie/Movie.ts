import AbstractMovie, { MovieAttributes } from './AbstractMovie'

export default class Movie extends AbstractMovie {
  constructor(movieAttributes: MovieAttributes) {
    super(movieAttributes)
  }

  public override isNull = (): boolean => {
    return false
  }
}
