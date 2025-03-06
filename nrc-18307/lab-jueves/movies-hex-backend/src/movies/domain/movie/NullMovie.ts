import NullDirector from '../director/NullDirector'
import AbstractMovie from './AbstractMovie'

export default class NullMovie extends AbstractMovie {
  constructor() {
    super({
      title: 'Not found',
      price: 0,
      year: 0,
      genres: 'Not found',
      extract: 'Not found',
      director: new NullDirector(),
      producer: [],
      age: 0,
      image: [],
      characters: [],
    })
  }

  public isNull = (): boolean => true
}
