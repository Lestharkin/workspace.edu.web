import Movie from '../../domain/model/Movie/Movie'

export default class MovieService {
  constructor(private readonly movieRepository: MovieRepository) {}

  readonly findByTitle = async (title: string): Promise<Movie[]> => {
    return this.movieRepository.findByTitle(title)
  }
}
