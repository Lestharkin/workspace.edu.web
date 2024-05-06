import Character from "../../domain/model/character/Character"
import NullCharacter from "../../domain/model/character/NullCharacter"
import Movie from "../../domain/model/movie/Movie"
import NullMovie from "../../domain/model/movie/NullMovie"
import AbstractPerson from "../../domain/model/person/AbstractPerson"
import NullProducer from "../../domain/model/producer/NullProducer"
import Producer from "../../domain/model/producer/Producer"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsMovie from "../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../util/StarwarsAPI"
import MovieDirectorProvider from "./provider/MovieDirectorProvider"

export default class RetrieveMovies implements RetrieveMoviesPort {
  private readonly movieDirectorProvider: MovieDirectorProvider

  constructor(private readonly starwarsAPI: StarwarsAPI) {
    this.movieDirectorProvider = new MovieDirectorProvider()
  }

  public findAll = async (): Promise<Movie[]> => {
    const starwarsMovies = await this.starwarsAPI.fetchAllMovies()
    const movies = starwarsMovies.map(async (starwarsMovie): Promise<Movie> => {
      if(starwarsMovie === null || starwarsMovie === undefined) {
        return new NullMovie()
      }

      const characters = await this.getCharacters(starwarsMovie) as Character[]
      const producers = await this.getProducers(starwarsMovie)
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

  private getCharacters = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson[]> => {
    const starwarsCharacters = await this.starwarsAPI.charactersFromMovies(starwarsMovie)
    return starwarsCharacters.map((starwarsCharacter): AbstractPerson => {
      const names = starwarsCharacter.name.split(" ")
      const name = names[0]
      const lastname = names[1]
      if(this.isEmpty(name) || this.isEmpty(lastname)) {
        return new NullCharacter()
      }
      return new Character(
        name,
        lastname,
        starwarsCharacter.gender
      )
    })
  }

  private getProducers = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson[]> => {
    const starwarsProducers = starwarsMovie.producer.split(", ")
    return starwarsProducers.map((starwarsProducer): AbstractPerson => {
      const {name, lastname} = this.splitNames(starwarsProducer)
      if(this.isEmpty(name) || this.isEmpty(lastname)) {
        return new NullProducer()
      }
      return new Producer(
        name,
        lastname
      )
    })
  }
}