import AbstractCharacter from '../character/AbstractCharacter'
import AbstractDirector from '../director/AbstractDirector'
import NullDirector from '../director/NullDirector'
import AbstractImage from '../image/AbstractImage'
import AbstractProducer from '../producer/AbstractProducer'
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

  public override setTitle = (_title: string): void => {
    return
  }

  public override setPrice = (_price: number): void => {
    return
  }

  public override setYear = (_year: number): void => {
    return
  }

  public override setGenres = (_genres: string): void => {
    return
  }

  public override setExtract = (_extract: string): void => {
    return
  }

  public override setDirector = (_director: AbstractDirector): void => {
    return
  }

  public override setProducer = (_producer: AbstractProducer[]): void => {
    return
  }

  public override setAge = (_age: number): void => {
    return
  }

  public override setImage = (_image: AbstractImage[]): void => {
    return
  }

  public override setCharacters = (_characters: AbstractCharacter[]): void => {
    return
  }
}
