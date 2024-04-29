import Character from "../character/Character"
import Director from "../director/Director"
import Producer from "../producer/Producer"

export default abstract class AbstractMovie {
  protected title: string
  protected episode_id: number
  protected opening: string
  protected releaseDate: Date
  protected producers: Producer[]
  protected director: Director
  protected cast: Character[]

  constructor(
    title: string,
    episode_id: number,
    opening: string,
    releaseDate: Date,
    producers: Producer[],
    director: Director,
    cast: Character[]
  ) {
    this.title = title
    this.episode_id = episode_id
    this.opening = opening
    this.releaseDate = releaseDate
    this.producers = producers
    this.director = director
    this.cast = cast
  }

  public abstract isNull(): boolean

  public getTitle(): string {
    return this.title
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public getEpisode_id(): number {
    return this.episode_id
  }

  public setEpisode_id(episode_id: number): void {
    this.episode_id = episode_id
  }

  public getOpening(): string {
    return this.opening
  }

  public setOpening(opening: string): void {
    this.opening = opening
  }

  public getReleaseDate(): Date {
    return this.releaseDate
  }

  public setReleaseDate(releaseDate: Date): void {
    this.releaseDate = releaseDate
  }

  public getProducers(): Producer[] {
    return this.producers
  }

  public setProducers(producers: Producer[]): void {
    this.producers = producers
  }

  public getDirector(): Director {
    return this.director
  }

  public setDirector(director: Director): void {
    this.director = director
  }

  public getCast(): Character[] {
    return this.cast
  }

  public setCast(cast: Character[]): void {
    this.cast = cast
  }

  public addProducer(producer:Producer): void {
    this.producers.push(producer)
  }

  public removeProducer(producer:Producer): void {
    this.producers = this.producers.filter(
      _producer => _producer !== producer
    )
  }
}