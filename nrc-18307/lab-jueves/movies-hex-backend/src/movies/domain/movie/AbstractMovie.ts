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

  public abstract isNull(): boolean

  public validateAge = (age: number): boolean => age >= this.age

  public getTitle = (): string => this.title

  public getPrice = (): number => this.price

  public getYear = (): number => this.year

  public getGenres = (): string => this.genres

  public getExtract = (): string => this.extract

  public getDirector = (): AbstractDirector => this.director

  public getProducer = (): AbstractProducer[] => this.producer

  public getAge = (): number => this.age

  public getImage = (): AbstractImage[] => this.image

  public getCharacters = (): AbstractCharacter[] => this.characters

  public setTitle = (title: string): void => {
    if(this.validateString(title, 10, 80)) {
      return
    }
    this.title = title
  }

  public setPrice = (price: number): void => {
    this.price = price
  }

  public setYear = (year: number): void => {
    this.year = year
  }

  public setGenres = (genres: string): void => {
    this.genres = genres
  }

  public setExtract = (extract: string): void => {
    if(this.validateString(extract, 10, 200)) {
      return
    }
    this.extract = extract
  }

  public setDirector = (director: AbstractDirector): void => {
    this.director = director
  }

  public setProducer = (producer: AbstractProducer[]): void => {
    this.producer = producer
  }

  public setAge = (age: number): void => {
    this.age = age
  }

  public setImage = (image: AbstractImage[]): void => {
    this.image = image
  }

  public setCharacters = (characters: AbstractCharacter[]): void => {
    this.characters = characters
  }
  
  private readonly validateString = (value: string, min: number, max: number): boolean => value === '' || value.length > max || value.length < min    
  
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
