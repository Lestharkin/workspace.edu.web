import { SwapiDBC } from '../../../../../shared/Shared'
import { SwapiFilmInterface } from '../../../../domain/interfaces/MovieSwapiInterface'
import Classification from '../../../../domain/model/Movie/Classification'
import Genre from '../../../../domain/model/Movie/Genre'
import Movie from '../../../../domain/model/Movie/Movie'
import NullMovie from '../../../../domain/model/Movie/NullMovie'
import NullStudio from '../../../../domain/model/studio/NullStudio'
import SwapiRepositoryPort from '../../../../domain/port/driven/adapter/repository/SwapiRepositoryPort'
import MakerProducers from './MakeProducers'
import MakerCharacters from './MakerCharacters'
import MakerDirector from './MakerDirector'

export default class SwapiRepository implements SwapiRepositoryPort {
  private readonly makerCharacters: MakerCharacters
  private readonly makerDirector: MakerDirector
  private readonly makerProducers: MakerProducers

  constructor(private readonly swapiDBC: SwapiDBC) {
    this.makerCharacters = new MakerCharacters(this.swapiDBC)
    this.makerDirector = new MakerDirector()
    this.makerProducers = new MakerProducers()
  }

  readonly findByTitle = async (title: string): Promise<Movie[]> => {
    const films: SwapiFilmInterface[] = await this.swapiDBC.films()

    return Promise.all(
      films.map(async (film) => {
        if (film.title.toLowerCase().includes(title.toLowerCase())) {
          const characters = await this.makerCharacters.make(film.characters)

          const director = this.makerDirector.make(film.director)

          const producers = this.makerProducers.make(film.producer)

          return new Movie({
            id: String(film.episode_id),
            title: film.title,
            synopsis: film.opening_crawl,
            release: new Date(film.release_date),
            classification: Classification.UNKNOWN,
            genre: Genre.UNKNOWN,
            characters,
            director,
            producers,
            studio: new NullStudio(),
            images: [],
            trailer: [],
          })
        }
        return new NullMovie()
      })
    )
  }
}
