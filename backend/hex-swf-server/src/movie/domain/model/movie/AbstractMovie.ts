import Character from '../character/Character'
import Director from '../director/Director'
import Producer from '../producer/Producer'
import Image from '../image/Image'

export default abstract class AbstractMovie {
  private title: string
  private episodeId: number
  private openingCrawl: string
  private director: Director
  private producers: Producer[]
  private releaseDate: Date
  private characters: Character[]
  private image: Image

  constructor(movieAttributes: MovieAttributes) {
    this.title = movieAttributes.title
    this.episodeId = movieAttributes.episodeId
    this.openingCrawl = movieAttributes.openingCrawl
    this.director = movieAttributes.director
    this.producers = movieAttributes.producers
    this.releaseDate = movieAttributes.releaseDate
    this.characters = movieAttributes.characters
    this.image = movieAttributes.image
  }
  
  public abstract isNull: () => boolean

  public getTitle = (): string => {
    return this.title
  }

  public getEpisodeId = (): number => {
    return this.episodeId
  }

  public getOpeningCrawl = (): string => {
    return this.openingCrawl
  }

  public getDirector = (): Director => {
    return this.director
  }

  public getProducers = (): Producer[] => {
    return this.producers
  }

  public getReleaseDate = (): Date => {
    return this.releaseDate
  }

  public getCharacters = (): Character[] => {
    return this.characters
  }

  public getImage = (): Image => {
    return this.image
  }

  public setTitle = (title: string): void => {
    this.title = title
  }

  public setEpisodeId = (episodeId: number): void => {
    this.episodeId = episodeId
  }

  public setOpeningCrawl = (openingCrawl: string): void => {
    this.openingCrawl = openingCrawl
  }

  public setDirector = (director: Director): void => {
    this.director = director
  }

  public setProducers = (producers: Producer[]): void => {
    this.producers = producers
  }

  public setReleaseDate = (releaseDate: Date): void => {
    this.releaseDate = releaseDate
  }

  public setCharacters = (characters: Character[]): void => {
    this.characters = characters
  }

  public setImage = (image: Image): void => {
    this.image = image
  }


}

export interface MovieAttributes {
  title: string
  episodeId: number
  openingCrawl: string
  director: Director
  producers: Producer[]
  releaseDate: Date
  characters: Character[]
  image: Image
}
