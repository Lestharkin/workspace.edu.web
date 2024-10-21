import Movie from '../../model/movie/Movie'

export default interface MovieUseCasePort {
  getMovies(): Movie[]
}
