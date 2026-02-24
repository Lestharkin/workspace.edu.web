import Classification from '../../enum/Classification'
import Genre from '../../enum/Genre'
import Trailer from '../AbstractTrailer'
import Character from '../Character'
import Director from '../Director'
import Producer from '../Producer'
import Studio from '../Studio'
import Image from '../Image'
import MovieBuilder from './MovieBuilder'

export default class Movie {
  protected readonly id: string
  protected title: string
  protected synopsis: string
  protected readonly release: Date
  protected readonly classification: Classification
  protected readonly genre: Genre
  protected trailer: Trailer[] = []
  protected readonly characters: Character[] = []
  protected readonly director: Director
  protected readonly producers: Producer[] = []
  protected readonly studio: Studio
  protected image: Image[]

  constructor(movie: MovieInterface) {
    this.id = movie.id
    this.title = movie.title
    this.synopsis = movie.synopsis
    this.release = movie.release
    this.classification = movie.classification
    this.genre = movie.genre
    this.trailer = movie.trailer
    this.characters = movie.characters
    this.director = movie.director
    this.producers = movie.producers
    this.studio = movie.studio
    this.image = movie.image
  }

  static readonly Builder = (): MovieBuilder => new MovieBuilder()
}

export interface MovieInterface {
  id: string
  title: string
  synopsis: string
  release: Date
  classification: Classification
  genre: Genre
  trailer: Trailer[]
  characters: Character[]
  director: Director
  producers: Producer[]
  studio: Studio
  image: Image[]
}
