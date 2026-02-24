import Character from '../Character'
import Classification from '../Classification'
import Director from '../Director'
import Genre from '../Genre'
import Movie from './Movie'
import Producer from '../Producer'
import Studio from '../Studio'
import Trailer from '../Trailer'

export default class MovieBuilder {
  private id: string = ''
  private title: string = ''
  private synopsis: string = ''
  private release: Date = new Date()
  private classification: Classification = Classification.UNKNOWN
  private genre: Genre = Genre.SCIFI
  private trailers: Trailer[] = []
  private characters: Character[] = []
  private director: Director = new Director()
  private studio: Studio = new Studio()
  private producer: Producer[] = []

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

  readonly setProducer = (producer: Producer[]): this => {
    this.producer = producer
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
      producers: this.producer,
    })
  }
}
