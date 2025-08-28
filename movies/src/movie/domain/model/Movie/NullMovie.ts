import Director from '../director/Director'
import NullDirector from '../director/NullDirector'
import Producer from '../producer/Producer'
import NullStudio from '../studio/NullStudio'
import Studio from '../studio/Studio'
import Classification from './Classification'
import Genre from './Genre'
import Movie from './Movie'
import Image from '../image/Image'
import Trailer from '../trailer/Trailer'
import NullCharacter from '../character/NullCharacter'
import NullProducer from '../producer/NullProducer'

export default class NullMovie extends Movie {
  constructor() {
    super({
      id: 'not-found',
      title: 'Not found in database',
      synopsis: 'Not found in database',
      release: new Date(),
      classification: Classification.UNKNOWN,
      genre: Genre.UNKNOWN,
      characters: [new NullCharacter()],
      director: new NullDirector(),
      producers: [new NullProducer()],
      studio: new NullStudio(),
      images: [],
      trailer: [],
    })
    this.isNull = true
  }

  override setTitle = (_title: string): void => {
    throw new Error('Cannot set title on NullMovie')
  }

  override setSynopsis = (_synopsis: string): void => {
    throw new Error('Cannot set synopsis on NullMovie')
  }

  override setRelease = (_releaseDate: Date): void => {
    throw new Error('Cannot set release date on NullMovie')
  }

  override setGenre = (_genre: Genre): void => {
    throw new Error('Cannot set genre on NullMovie')
  }

  override setDirector = (_director: Director): void => {
    throw new Error('Cannot set director on NullMovie')
  }

  override setProducers = (_producers: Producer[]): void => {
    throw new Error('Cannot set producers on NullMovie')
  }

  override setStudio = (_studio: Studio): void => {
    throw new Error('Cannot set studio on NullMovie')
  }

  override setImages = (_images: Image[]): void => {
    throw new Error('Cannot set images on NullMovie')
  }

  override setTrailer = (_trailer: Trailer[]): void => {
    throw new Error('Cannot set trailer on NullMovie')
  }
}
