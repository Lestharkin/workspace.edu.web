import Classification from '../enum/Classification'
import Genre from '../enum/Genre'
import AbstractMovie from './AbstractMovie'

export default class NullMovie extends AbstractMovie {
  constructor() {
    super({
      id: 'Not found',
      title: 'Not found',
      synopsis: 'Not found',
      release: new Date('1900-01-01'),
      classification: Classification.UNKNOWN,
      genre: Genre.UNKNOWN,
      trailers: [],
      characters: [],
      director: 'Not found',
      studio: 'Not found',
      producers: [],
    })
  }
}
