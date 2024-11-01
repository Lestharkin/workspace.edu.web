import { getDate } from '../../../util/dates'
import Movie from '../../domain/model/movie/Movie'
import SWAPIRepositoryPort from '../../domain/port/driven/SWAPIRepositoryPort'
import MovieImageServicePort from '../../domain/port/driver/MovieImageServicePort'
import MovieRetrieverServicePort from '../../domain/port/driver/MovieRetrieverServicePort'
import MovieDataInterface from '../../domain/types/MovieDataInterface'
import CharacterProvider from '../../infrastructure/Repository/swapi/provider/CharacterProvider'
import DirectorProvider from '../../infrastructure/Repository/swapi/provider/DirectorProvider'
import ImageProvider from '../../infrastructure/Repository/swapi/provider/ImageProvider'
import ProducerProvider from '../../infrastructure/Repository/swapi/provider/ProducerProvider'

export default class MovieRetrieverService
  implements MovieRetrieverServicePort
{
  constructor(
    private readonly movieImageService: MovieImageServicePort,
    private readonly SWAPIRepository: SWAPIRepositoryPort
  ) {}

  public retrieve = async (): Promise<Movie[]> => {
    const SWAPImovies = await this.SWAPIRepository.findALL()
    const movieImages = await this.getImage(SWAPImovies)
    const movies = SWAPImovies.map((movie, index) => { 
      return new Movie({
        title: movie.title,
        episodeId: parseInt(movie.episodeId),
        openingCrawl: movie.openingCrawl,
        director: DirectorProvider.get(movie),
        producers: ProducerProvider.get(movie),
        releaseDate: getDate(movie.releaseDate),
        characters: CharacterProvider.get(movie.characters),
        image: ImageProvider.get(movie.title, movieImages[index] ?? '')
      })
    })

    return Promise.resolve(movies)
  }  

  private async getImage(movieData: MovieDataInterface[]): Promise<string[]> {
    const titles = movieData.map((movie) => movie.title)
    const movieImages = await this.movieImageService.getImages(
      titles
    )
    return movieImages
  }

}
