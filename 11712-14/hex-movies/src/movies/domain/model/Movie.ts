import Character from './Character'
import Classification from './Classification'
import Director from './Director'
import Genre from './Genre'
import MovieBuilder from './MovieBuidler'
import Producer from './Producer'
import Studio from './Studio'
import Trailer from './Trailer'

export default class Movie {
  private readonly id: string
  private readonly title: string
  private readonly synopsis: string
  private readonly release: Date
  private readonly classification: Classification
  private readonly genre: Genre
  private readonly trailers: Trailer[]
  private readonly characters: Character[]
  private readonly director: Director
  private readonly studio: Studio
  private readonly producer: Producer[]

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
