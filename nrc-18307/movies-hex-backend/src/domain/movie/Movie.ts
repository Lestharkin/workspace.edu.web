import AbstractMovie, { MovieInterface } from './AbstractMovie'

export default class Movie extends AbstractMovie {
  constructor(movieInterface: MovieInterface) {
    super(movieInterface)
  }

  public isNull = (): boolean => {
    return false
  }
}
