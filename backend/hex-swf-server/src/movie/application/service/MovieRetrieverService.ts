import Character from '../../domain/model/character/Character'
import NullCharacter from '../../domain/model/character/NullCharacter'
import Director from '../../domain/model/director/Director'
import NullDirector from '../../domain/model/director/NullDirector'
import Movie from '../../domain/model/movie/Movie'
import NullProducer from '../../domain/model/producer/NullProducer'
import Producer from '../../domain/model/producer/Producer'
import SWAPIRepositoryPort from '../../domain/port/driven/SWAPIRepositoryPort'
import MovieImageServicePort from '../../domain/port/driver/MovieImageServicePort'
import MovieRetrieverServicePort from '../../domain/port/driver/MovieRetrieverServicePort'
import MovieDataInterface from '../../domain/types/MovieDataInterface'

export default class MovieRetrieverService
  implements MovieRetrieverServicePort
{
  constructor(
    private readonly movieImageService: MovieImageServicePort,
    private readonly SWAPIRepository: SWAPIRepositoryPort
  ) {}

  public retrieve = async (): Promise<Movie[]> => {
    const SWAPImovies = await this.SWAPIRepository.findALL()
    const titles = SWAPImovies.map((movie) => movie.title)
    const movieImages = await this.movieImageService.getImages(
      titles
    )
    const movies = SWAPImovies.map((movie, index) => { 

      return new Movie({
        title: movie.title,
        episodeId: parseInt(movie.episodeId),
        openingCrawl: movie.openingCrawl,
        director: this.getDirector(movie),
        producers: this.getProducers(movie),
        releaseDate: this.getDate(movie.releaseDate),
        characters: this.characters(movie.characters),
        image: movieImages[index] ?? '',
      })
    })

    return Promise.resolve([])
  }

  private getDirector = (movie: MovieDataInterface): Director => {
    const directorNames = movie.director.split(' ')
    const name  = directorNames[0] ?? ''
    const lastname = directorNames[1] ?? ''
    if (directorNames === undefined || directorNames.length === 0 || name === '') {
      return new NullDirector()
    }
    return new Director({
      name: name,
      lastname: lastname,
      yearsOfExperience: 12,          
    })   
  }

  private getProducers = (movie: MovieDataInterface): Producer[] => {
    return movie.producers.map((producer) => {
      const producerNames = producer.split(' ')
      const name = producerNames[0] ?? ''
      const lastname = producerNames[1] ?? ''
      if (producerNames === undefined || producerNames.length === 0 || name === '') {
        return new NullProducer()
      }
      return new Producer({
        name: name,
        lastname: lastname
      })
    })
  }

  private getDate = (date: string): Date => {    
    if (date === undefined || date === '') {
      return new Date()
    }
    return new Date(date)
  }

  private characters = (characters: string[]): Character[] => {
    return characters.map((character) => {
      const characterNames = character.split(' ')
      const name = characterNames[0] ?? ''
      const lastname = characterNames[1] ?? ''
      if (characterNames === undefined || characterNames.length === 0 || name === '') {
        return new NullCharacter()
      }
      return new Character({
        name: name,
        lastname: lastname,
        // TODO - Implement date validation
        birthYear: new Date()
      })
    })
  }

  private getImage() {
    return ''
  }

}
