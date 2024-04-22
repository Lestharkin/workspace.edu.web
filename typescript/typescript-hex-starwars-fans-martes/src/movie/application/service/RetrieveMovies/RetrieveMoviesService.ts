import Movie from '../../../domain/model/movie/Movie'
import RetrieveMoviesServicePort from '../../../domain/port/driver/RetrieveMovies/RetrieveMoviesServicePort'

export default class RetrieveMoviesService implements RetrieveMoviesServicePort {
  name: string

  constructor() {
    this.name = 'RetrieveMoviesService'
  }

  public getMovies = async (): Promise<Movie[]> => {
    return  []
  }
}
  
