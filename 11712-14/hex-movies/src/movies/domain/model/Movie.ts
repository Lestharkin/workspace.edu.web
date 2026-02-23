import Character from './Character'
import Classification from './Classification'
import Director from './Director'
import Genre from './Genre'
import MovieBuilder from './MovieBuilder'
import Producer from './Producer'
import Studio from './Studio'
import Trailer from './Trailer'

export default class Movie {
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
  private producer: Producer[]

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
    this.producer = movie.producer
  }

  static readonly builder = (): MovieBuilder => {
    return new MovieBuilder()
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

  readonly getProducer = (): Producer[] => this.producer

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

  readonly setProducer = (producer: Producer[]): void => {
    this.producer = producer
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
  producer: Producer[]
}
