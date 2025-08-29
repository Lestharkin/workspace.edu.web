import NullObject from '../../../../shared/base/domain/interfaces/NullObject'
import Character from '../character/Character'
import Director from '../director/Director'
import Image from '../image/Image'
import Producer from '../producer/Producer'
import Studio from '../studio/Studio'
import Trailer from '../trailer/Trailer'
import Classification from './Classification'
import Genre from './Genre'

export default class Movie implements NullObject {
  private readonly id: string
  private title: string
  private synopsis: string
  private release: Date
  private classification: Classification
  private genre: Genre
  private characters: Character[]
  private director: Director
  private producers: Producer[]
  private studio: Studio
  private images: Image[]
  private trailer: Trailer[]
  isNull: boolean

  constructor(movie: MovieInterface) {
    if (
      movie.producers.length === 0 ||
      movie.characters.length === 0 ||
      !movie.director ||
      !movie.studio
    ) {
      throw new Error('Invalid movie data: Missing required fields.')
    }
    this.id = movie.id
    this.title = movie.title
    this.synopsis = movie.synopsis
    this.release = movie.release
    this.classification = movie.classification
    this.genre = movie.genre
    this.characters = movie.characters
    this.director = movie.director
    this.producers = movie.producers
    this.studio = movie.studio
    this.images = movie.images
    this.trailer = movie.trailer
    this.isNull = false
  }

  getId = (): string => {
    return this.id
  }

  getTitle = (): string => {
    return this.title
  }

  getSynopsis = (): string => {
    return this.synopsis
  }

  getRelease = (): Date => {
    return this.release
  }

  getClassification = (): Classification => {
    return this.classification
  }

  getGenre = (): Genre => {
    return this.genre
  }

  getCharacters = (): Character[] => {
    return this.characters
  }

  getDirector = (): Director => {
    return this.director
  }

  getProducers = (): Producer[] => {
    return this.producers
  }

  getStudio = (): Studio => {
    return this.studio
  }

  getImages = (): Image[] => {
    return this.images
  }

  getTrailer = (): Trailer[] => {
    return this.trailer
  }

  setTitle = (title: string): void => {
    this.title = title
  }

  setSynopsis = (synopsis: string): void => {
    this.synopsis = synopsis
  }

  setRelease = (release: Date): void => {
    this.release = release
  }

  setClassification = (classification: Classification): void => {
    this.classification = classification
  }

  setGenre = (genre: Genre): void => {
    this.genre = genre
  }

  setCharacters = (characters: Character[]): void => {
    this.characters = characters
  }

  setDirector = (director: Director): void => {
    this.director = director
  }

  setProducers = (producers: Producer[]): void => {
    this.producers = producers
  }

  setStudio = (studio: Studio): void => {
    this.studio = studio
  }

  setImages = (images: Image[]): void => {
    this.images = images
  }

  setTrailer = (trailer: Trailer[]): void => {
    this.trailer = trailer
  }
}

export interface MovieInterface {
  id: string
  title: string
  synopsis: string
  release: Date
  classification: Classification
  genre: Genre
  characters: Character[]
  director: Director
  producers: Producer[]
  studio: Studio
  images: Image[]
  trailer: Trailer[]
}
