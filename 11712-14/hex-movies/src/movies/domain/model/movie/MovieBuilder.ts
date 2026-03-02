import Character from '../character/Character'
import Director from '../director/Director'
import Classification from '../enum/Classification'
import Genre from '../enum/Genre'
import Image from '../image/Image'
import Producer from '../producer/Producer'
import Studio from '../studio/Studio'
import Trailer from '../trailer/Trailer'
import Movie from './Movie'

export default class MovieBuilder {
  private id: string = ''
  private title: string = ''
  private synopsis: string = ''
  private release: Date = new Date()
  private classification: Classification = Classification.UNKNOWN
  private genre: Genre = Genre.SCIFI
  private trailers: Trailer[] = []
  private characters: Character[] = []
  private director: Director = new Director(
    'not assigned yet',
    'not assigned yet',
    'not assigned yet',
    0,
  )
  private studio: Studio = new Studio('not assigned yet', 'not assigned yet')
  private producers: Producer[] = []
  private images: Image[] = []

  readonly setId = (id: string): this => {
    this.id = id
    return this
  }

  readonly setTitle = (title: string): this => {
    this.title = title
    return this
  }

  readonly setSynopsis = (synopsis: string): this => {
    this.synopsis = synopsis
    return this
  }

  readonly setRelease = (release: Date): this => {
    this.release = release
    return this
  }

  readonly setClassification = (classification: Classification): this => {
    this.classification = classification
    return this
  }

  readonly setGenre = (genre: Genre): this => {
    this.genre = genre
    return this
  }

  readonly setTrailers = (trailers: Trailer[]): this => {
    this.trailers = trailers
    return this
  }

  readonly setCharacters = (characters: Character[]): this => {
    this.characters = characters
    return this
  }

  readonly setDirector = (director: Director): this => {
    this.director = director
    return this
  }

  readonly setStudio = (studio: Studio): this => {
    this.studio = studio
    return this
  }

  readonly setProducers = (producers: Producer[]): this => {
    this.producers = producers
    return this
  }

  readonly setImages = (images: Image[]): this => {
    this.images = images
    return this
  }

  readonly build = (): Movie => {
    return new Movie({
      id: this.id,
      title: this.title,
      synopsis: this.synopsis,
      release: this.release,
      classification: this.classification,
      genre: this.genre,
      trailers: this.trailers,
      characters: this.characters,
      director: this.director,
      studio: this.studio,
      producers: this.producers,
      images: this.images,
    })
  }
}
