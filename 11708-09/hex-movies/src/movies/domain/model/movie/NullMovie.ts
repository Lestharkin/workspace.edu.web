import Classification from '../../enum/Classification'
import Genre from '../../enum/Genre'
import AbstractMovie from './AbstractMovie'

export default class NullMovie extends AbstractMovie {
  override readonly isNull = (): boolean => true

  constructor() {
    super({
      id: 'not found',
      title: 'not found',
      synopsis: 'not found',
      release: new Date('1900-01-01'),
      classification: Classification.UNKNOWN,
      genre: Genre.UNKNOWN,
      trailer: [],
      characters: [],
      director: null as any,
      producers: [],
      studio: null as any,
      image: [],
    })
  }
}
