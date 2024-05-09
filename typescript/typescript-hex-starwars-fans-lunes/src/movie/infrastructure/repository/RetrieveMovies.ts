import Character from "../../domain/model/character/Character"
import NullCharacter from "../../domain/model/character/NullCharacter"
import Director from "../../domain/model/director/Director"
import Movie from "../../domain/model/movie/Movie"
import NullMovie from "../../domain/model/movie/NullMovie"
import AbstractPerson from "../../domain/model/person/AbstractPerson"
import NullProducer from "../../domain/model/producer/NullProducer"
import Producer from "../../domain/model/producer/Producer"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsMovie from "../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../util/StarwarsAPI"
import MovieDirectorProvider from "./provider/MovieDirectorProvider"
import MovieProducerProvider from "./provider/MovieProducersProvider"

export default class RetrieveMovies implements RetrieveMoviesPort {
  private readonly movieDirectorProvider: MovieDirectorProvider
  private readonly movieProducerProvider: MovieProducerProvider

  constructor(private readonly starwarsAPI: StarwarsAPI) {
    this.movieDirectorProvider = new MovieDirectorProvider()
    this.movieProducerProvider = new MovieProducerProvider()
  }

  public findAll = async (): Promise<Movie[]> => {
    const starwarsMovies = await this.starwarsAPI.fetchAllMovies()
    const movies = starwarsMovies.map(async (starwarsMovie): Promise<Movie> => {
      if(starwarsMovie === null || starwarsMovie === undefined) {
        return new NullMovie()
      }

      const characters = await this.getCharacters(starwarsMovie) as Character[]
      const producers = await this.movieProducerProvider.get(starwarsMovie.producer)
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