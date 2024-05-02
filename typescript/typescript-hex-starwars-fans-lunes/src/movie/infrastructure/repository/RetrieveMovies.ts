import Character from "../../domain/model/character/Character"
import NullCharacter from "../../domain/model/character/NullCharacter"
import Director from "../../domain/model/director/Director"
import NullDirector from "../../domain/model/director/NullDirector"
import Movie from "../../domain/model/movie/Movie"
import NullMovie from "../../domain/model/movie/NullMovie"
import AbstractPerson from "../../domain/model/person/AbstractPerson"
import NullProducer from "../../domain/model/producer/NullProducer"
import Producer from "../../domain/model/producer/Producer"
import RetrieveMoviesPort from "../../domain/port/driven/RetrieveMoviesPort"
import StarwarsMovie from "../../domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../util/StarwarsAPI"

export default class RetrieveMovies implements RetrieveMoviesPort {
  constructor(private readonly starwarsAPI: StarwarsAPI) {}

  public findAll = async (): Promise<Movie[]> => {
    const starwarsMovies = await this.starwarsAPI.fetchAllMovies()
    const movies = starwarsMovies.map(async (starwarsMovie): Promise<Movie> => {
      if(starwarsMovie === null || starwarsMovie === undefined) {
        return new NullMovie()
      }

      const characters = await this.getCharacters(starwarsMovie) as Character[]
      const producers = await this.getProducers(starwarsMovie)
      const director = await this.getDirector(starwarsMovie)

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

  private isEmpty = (value: string): boolean => {
    if(value === null || value === undefined || value === "") {
      return true
    }
    return false
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

  private getDirector = async (starwarsMovie: StarwarsMovie): Promise<AbstractPerson> => {
    const starwarsDirector = starwarsMovie.director
    const {name, lastname} = this.splitNames(starwarsDirector)
    if(this.isEmpty(name) || this.isEmpty(lastname)) {
      return new NullDirector()
    }
    return new Director(
      name,      
      lastname
    )
  }

  private splitNames = (starwarsNames: string): {name: string, lastname: string} => {
    const names = starwarsNames.split(" ")
    return {
      name: names[0],
      lastname: names[1]
    }
  }
}