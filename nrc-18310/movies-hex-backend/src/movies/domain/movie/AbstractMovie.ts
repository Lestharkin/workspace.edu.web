import AbstractCharacter from '../character/AbstractCharacter'
import AbstractDirector from '../director/AbstractDirector'
import AbstractImage from '../image/AbstractImage'
import AbstractProducer from '../producer/AbstractProducer'

export default abstract class AbstractMovie {
  protected title: string
  protected price: number
  protected year: number
  protected genres: string
  protected extract: string
  protected director: AbstractDirector
  protected producers: AbstractProducer[]
  protected age: number
  protected image?: AbstractImage[] | undefined
  protected characters: AbstractCharacter[]

  constructor(movie: MovieInterface) {
    this.title = movie.title
    this.price = movie.price
    this.year = movie.year
    this.genres = movie.genres
    this.extract = movie.extract
    this.director = movie.director
    this.producers = movie.producers
    this.age = movie.age
    this.image = movie.image
    this.characters = movie.characters
  }

  public abstract isNull(): boolean

  public abstract validateAge(age: number): boolean
}

export interface MovieInterface {
  title: string
  price: number
  year: number
  genres: string
  extract: string
  director: AbstractDirector
  producers: AbstractProducer[]
  age: number
  image?: AbstractImage[] | undefined
  characters: AbstractCharacter[]
}
