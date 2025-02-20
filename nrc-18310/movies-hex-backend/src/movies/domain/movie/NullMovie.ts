import NullDirector from '../director/NullDirector'
import AbstractMovie from './AbstractMovie'

export default class NullMovie extends AbstractMovie {
  constructor() {
    super({
      title: '',
      price: 0,
      year: 1900,
      genres: 'none',
      extract: 'none',
      director: new NullDirector(),
      producers: [],
      age: 0,
      characters: [],
    })
  }

  public isNull = (): boolean => {
    return true
  }

  public validateAge = (age: number): boolean => {
    return false
  }
}
