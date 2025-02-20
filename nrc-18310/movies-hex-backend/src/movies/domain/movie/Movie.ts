import AbstractMovie, { MovieInterface } from './AbstractMovie'

export default class Movie extends AbstractMovie {
  constructor(movie: MovieInterface) {
    super(movie)
  }

  public override isNull = (): boolean => {
    return false
  }
  public override validateAge = (age: number): boolean => {
    return age >= this.age
  }
}
