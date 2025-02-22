import NullDirector from "../director/NullDirector"
import AbstractMovie from "./AbstractMovie"

export default class NullMovie extends AbstractMovie {

  constructor() {
    super({
      title: 'null',
      price: 0,
      year: 0,
      genres: 'null',
      extract: 'null',
      director: new NullDirector(),
      producer: [],
      age: 0,
      image: [],
      characters: []
    })
  }

  public isNull = (): boolean => {
    return true
  }
}