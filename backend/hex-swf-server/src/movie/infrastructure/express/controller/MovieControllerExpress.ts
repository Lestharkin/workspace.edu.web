import { Request, Response } from 'express'

import MovieControllerExpressPort from '../../../domain/port/driver/MovieControllerExpressPort'
import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class MovieControllerExpress
  implements MovieControllerExpressPort
{
  constructor(private readonly movieUseCase: MovieUseCasePort) {}

  public async movies(_req: Request, res: Response): Promise<void> {
    // TODO: validate ALL
    const movies = await this.movieUseCase.getMovies()
    const movieResponse = movies.map((movie) => {
      return {
        title: movie.getTitle(),
        episodeId: movie.getEpisodeId(),
        openingCrawl: movie.getOpeningCrawl,
        director: movie.getDirector(),
        producers: movie.getProducers(),
        releaseDate: movie.getReleaseDate(),
        characters: movie.getCharacters(),
        image: movie.getImage(),
        yearsOld: movie.getYearsOld(),
      }
    })
    res.status(200).json({ message: 'Hello Movies', data: movieResponse })
  }
}
