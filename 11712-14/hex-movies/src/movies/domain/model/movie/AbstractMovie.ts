import Character from '../character/Character'
import Director from '../director/Director'
import Classification from '../enum/Classification'
import Genre from '../enum/Genre'
import Producer from '../producer/Producer'
import Studio from '../studio/Studio'
import Trailer from '../trailer/Trailer'
import Image from '../image/Image'

export default abstract class AbstractMovie {
  private readonly id: string
  private title: string
  private synopsis: string
  private release: Date
  private classification: Classification
  private genre: Genre
  private trailers: Trailer[]
  private characters: Character[]
  private director: Director
  private studio: Studio
  private producers: Producer[]
  private images: Image[]

  constructor(movie: MovieInterface) {
    this.id = movie.id
    this.title = movie.title
    this.synopsis = movie.synopsis
    this.release = movie.release
    this.classification = movie.classification
    this.genre = movie.genre
    this.trailers = movie.trailers
    this.characters = movie.characters
    this.director = movie.director
    this.studio = movie.studio
    this.producers = movie.producers
    this.images = movie.images
  }

  readonly getId = (): string => this.id

  readonly getTitle = (): string => this.title

  readonly getSynopsis = (): string => this.synopsis

  readonly getRelease = (): Date => this.release

  readonly getClassification = (): Classification => this.classification

  readonly getGenre = (): Genre => this.genre

  readonly getTrailers = (): Trailer[] => this.trailers

  readonly getCharacters = (): Character[] => this.characters

  readonly getDirector = (): Director => this.director

  readonly getStudio = (): Studio => this.studio

  readonly getProducers = (): Producer[] => this.producers

  readonly getImages = (): Image[] => this.images

  readonly setTitle = (title: string): void => {
    this.title = title
  }

  readonly setSynopsis = (synopsis: string): void => {
    this.synopsis = synopsis
  }

  readonly setRelease = (release: Date): void => {
    this.release = release
  }

  readonly setClassification = (classification: Classification): void => {
    this.classification = classification
  }

  readonly setGenre = (genre: Genre): void => {
    this.genre = genre
  }

  readonly setTrailers = (trailers: Trailer[]): void => {
    this.trailers = trailers
  }

  readonly setCharacters = (characters: Character[]): void => {
    this.characters = characters
  }

  readonly setDirector = (director: Director): void => {
    this.director = director
  }

  readonly setStudio = (studio: Studio): void => {
    this.studio = studio
  }

  readonly setProducers = (producers: Producer[]): void => {
    this.producers = producers
  }

  readonly setImages = (images: Image[]): void => {
    this.images = images
  }
}

export interface MovieInterface {
  id: string
  title: string
  synopsis: string
  release: Date
  classification: Classification
  genre: Genre
  trailers: Trailer[]
  characters: Character[]
  director: Director
  studio: Studio
  producers: Producer[]
  images: Image[]
}
