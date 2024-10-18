import Director from "./Director"
import Producer from "./Producer"

export default abstract class AbstractMovie {
  private title:string
  private episodeId: number
  private openingCrawl: string
  private director: Director
  private producers: Producer
  private releaseDate: Date
  private characters: Character
  private image: Image

  
}