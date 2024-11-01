import Repository from "../../../domain/repository/RepositoryInterface"
import MovieDataInterface from "../../../domain/types/MovieDataInterface"
import SWAPIDBC from "./SWAPIDBC"

export default class SWAPIRepository implements Repository<string, MovieDataInterface> {
  private readonly swApiDBC: SWAPIDBC

  constructor() {
    this.swApiDBC = new SWAPIDBC()
  }
  findAll = async (): Promise<MovieDataInterface[]> => {
    const moviesFormSWAPI = await this.swApiDBC.findALL()
    return moviesFormSWAPI.map((movie: any) => ({
      title: movie.title,
      episodeId: movie.episode_id,
      openingCrawl: movie.opening_crawl,
      director: movie.director,
      producers: movie.producer.split(','),
      releaseDate: movie.release_date,
      characters: movie.characters
    }))
  }
  
  findById = (_id: string): Promise<MovieDataInterface> => {
    throw new Error("Method not implemented.")
  }
  save = (_item: MovieDataInterface): Promise<MovieDataInterface> => {
    throw new Error("Method not implemented.")
  }
  update = (_id: string, _item: Partial<MovieDataInterface>): Promise<boolean | MovieDataInterface> => {
    throw new Error("Method not implemented.")
  }
  delete = (_id: string): Promise<boolean> => {
    throw new Error("Method not implemented.")
  }

  
}