import { Request, Response } from 'express'
import MovieAbstractController from '../../../../domain/api/MovieAbstractController'
import MovieFilter from '../../../../domain/interfaces/MovieFilter'
import Classification from '../../../../domain/model/Movie/Classification'
import Genre from '../../../../domain/model/Movie/Genre'
import MovieUseCasePort from '../../../../domain/port/driver/usecase/MovieUseCasePort'

export default class MovieSeekerController extends MovieAbstractController {
  constructor(private readonly movieUseCase: MovieUseCasePort) {
    super()
  }

  readonly search = async (req: Request, res: Response): Promise<void> => {
    try {
      let {
        title,
        synopsis,
        release,
        classification,
        genre,
        characters,
        director,
        producers,
        studio,
      } = req.query

      //TODO: Validate query parameters

      const query: MovieFilter = {
        title: typeof title === 'string' ? title : undefined,
        synopsis: typeof synopsis === 'string' ? synopsis : undefined,
        release: typeof release === 'string' ? new Date(release) : undefined,
        classification:
          typeof classification === 'string' && classification in Classification
            ? Classification[classification as keyof typeof Classification]
            : undefined,
        genre:
          typeof genre === 'string'
            ? Genre[genre as keyof typeof Genre]
            : undefined,
        characters:
          typeof characters === 'string'
            ? characters.split(',').map((c) => c.trim())
            : undefined,
        director: typeof director === 'string' ? director : undefined,
        producers:
          typeof producers === 'string'
            ? producers.split(',').map((p) => p.trim())
            : undefined,
        studio: typeof studio === 'string' ? studio : undefined,
      }

      console.log('Search query:', query)

      const movies = await this.movieUseCase.search(query)

      if (!movies || movies.length === 0) {
        res
          .status(this.HTTPStatusCode.NOT_FOUND)
          .json({ error: 'No movies found' })
        return
      }

      res.status(this.HTTPStatusCode.OK).json(movies)
    } catch (error) {
      console.error('Error searching movies:', error)
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error' })
    }
  }
}
