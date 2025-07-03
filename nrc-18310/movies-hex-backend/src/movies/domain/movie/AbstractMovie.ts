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
  protected producer: AbstractProducer[]
  protected age: number
  protected image: AbstractImage[]
  protected characters: AbstractCharacter[]

  constructor(movieInterface: MovieInterface) {
    this.title = movieInterface.title
    this.price = movieInterface.price
    this.year = movieInterface.year
    this.genres = movieInterface.genres
    this.extract = movieInterface.extract
    this.director = movieInterface.director
    this.producer = movieInterface.producer
    this.age = movieInterface.age
    this.image = movieInterface.image
    this.characters = movieInterface.characters
  }

  public validatePrice = (price: number): number => (price <= 0 ? 5 : price)

  public abstract isNull(): boolean

  public validateAge = (age: number): boolean => age >= this.age

  public getTitle = (): string => this.title

  public setTitle = (title: string): void => {
    if (this.validateString(title, 5, 80)) {
      return
    }
    this.title = title
  }

  public getPrice = (): number => this.price

  public setPrice = (price: number): void => {
    if (price < 0) {
      return
    }
    this.price = price
  }

  public getYear = (): number => this.year

  public setYear = (year: number): void => {
    if (year < 0) {
      return
    }
    this.year = year
  }

  public getGenres = (): string => this.genres

  public setGenres = (genres: string): void => {
    if (this.validateString(genres, 5, 10)) {
      return
    }
    this.genres = genres
  }

  public getExtract = (): string => this.extract

  public setExtract = (extract: string): void => {
    if (this.validateString(extract, 5, 1024)) {
      return
    }
    this.extract = extract
  }

  public getDirector = (): AbstractDirector => this.director

  public setDirector = (director: AbstractDirector): void => {
    this.director = director
  }

  public getProducer = (): AbstractProducer[] => this.producer

  public setProducer = (producer: AbstractProducer[]): void => {
    this.producer = producer
  }

  public getAge = (): number => this.age

  public setAge = (age: number): void => {
    if (age < 0) {
      return
    }
    this.age = age
  }

  public getImage = (): AbstractImage[] => this.image

  public setImage = (image: AbstractImage[]): void => {
    this.image = image
  }

  public getCharacters = (): AbstractCharacter[] => this.characters

  public setCharacters = (characters: AbstractCharacter[]): void => {
    this.characters = characters
  }

  private readonly validateString = (
    value: string,
    min: number,
    max: number
  ): boolean => value === '' || value.length < min || value.length > max
}

interface MovieInterface {
  title: string
  price: number
  year: number
  genres: string
  extract: string
  director: AbstractDirector
  producer: AbstractProducer[]
  age: number
  image: AbstractImage[]
  characters: AbstractCharacter[]
}

export { MovieInterface }
