import Character from "../../domain/model/character/Character"
import Movie from "../../domain/model/movie/Movie"
import NullMovie from "../../domain/model/movie/NullMovie"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsAPI from "../../util/StarwarsAPI"
import MovieCharacterProvider from "./provider/MovieCharacterProvider"
import MovieDirectorProvider from "./provider/MovieDirectorProvider"
import MovieProducerProvider from "./provider/MovieProducersProvider"

export default class RetrieveMovies implements RetrieveMoviesPort {
  private readonly movieDirectorProvider: MovieDirectorProvider
  private readonly movieProducerProvider: MovieProducerProvider
  private readonly movieCharacterProvider: MovieCharacterProvider

  constructor(private readonly starwarsAPI: StarwarsAPI) {
    this.movieDirectorProvider = new MovieDirectorProvider()
    this.movieProducerProvider = new MovieProducerProvider()
    this.movieCharacterProvider = new MovieCharacterProvider(starwarsAPI)
  }

  public findAll = async (): Promise<Movie[]> => {
    const starwarsMovies = await this.starwarsAPI.fetchAllMovies()
    const movies = starwarsMovies.map(async (starwarsMovie): Promise<Movie> => {
      if(starwarsMovie === null || starwarsMovie === undefined) {
        return new NullMovie()
      }

      const characters = await this.movieCharacterProvider.get(starwarsMovie) as Character[]
      const producers = this.movieProducerProvider.get(starwarsMovie.producer)
      const director = this.movieDirectorProvider.get(starwarsMovie.director)

      return new Movie(
        starwarsMovie.title,
        starwarsMovie.episode_id,
        starwarsMovie.opening_crawl,
        new Date(starwarsMovie.release_date),
        producers,
        director,
        characters
      )
    })

    return await Promise.all(movies)
  }  
}