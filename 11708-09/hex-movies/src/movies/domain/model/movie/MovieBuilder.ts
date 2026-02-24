import Classification from '../../enum/Classification'
import Genre from '../../enum/Genre'
import Character from '../Character'
import Director from '../Director'
import Producer from '../Producer'
import Studio from '../Studio'
import Trailer from '../Trailer'
import Image from '../Image'
import Movie from './Movie'

export default class MovieBuilder {
  id: string = ''
  title: string = ''
  synopsis: string = ''
  release: Date = new Date()
  classification: Classification = Classification.UNKNOWN
  genre: Genre = Genre.UNKNOWN
  trailer: Trailer[] = []
  characters: Character[] = []
  director: Director = new Director()
  producers: Producer[] = []
  studio: Studio = new Studio()
  image: Image[] = []

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

  readonly setTrailer = (trailer: Trailer[]): this => {
    this.trailer = trailer
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

  readonly setProducers = (producers: Producer[]): this => {
    this.producers = producers
    return this
  }

  readonly setStudio = (studio: Studio): this => {
    this.studio = studio
    return this
  }

  readonly setImage = (image: Image[]): this => {
    this.image = image
    return this
  }

  readonly build = (): Movie =>
    new Movie({
      id: this.id,
      title: this.title,
      synopsis: this.synopsis,
      release: this.release,
      classification: this.classification,
      genre: this.genre,
      trailer: this.trailer,
      characters: this.characters,
      director: this.director,
      producers: this.producers,
      studio: this.studio,
      image: this.image,
    })
}
