import CacheRepository from "../../../../shared/cache/infrastructure/CacheRepository"
import StarwarsCharacter from "../../../domain/starwars/StarwarsCharacter"
import StarwarsMovie from "../../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../../util/StarwarsAPI"
import MovieAbstractProvider from "./MovieAbstractProvider"

export default class MovieCharacterProviderCache extends MovieAbstractProvider {
  constructor(
    private readonly starwarsAPI: StarwarsAPI,
    private readonly cacheRepository: CacheRepository<StarwarsCharacter[]>
  ) {
    super()
  }  

  protected charactersFromMovies = async (starwarsMovie: StarwarsMovie): Promise<StarwarsCharacter[]> => {
    const key = `starwarsCharacter-${starwarsMovie.title}`
    let starwarsCharacter: StarwarsCharacter[] | null = null

    if(await this.cacheRepository.isHealthy()) {
      starwarsCharacter = await this.cacheRepository.get(key)
    }

    if (!starwarsCharacter) {
      starwarsCharacter = await this.starwarsAPI.charactersFromMovies(starwarsMovie)
    }

    return starwarsCharacter
  }
}