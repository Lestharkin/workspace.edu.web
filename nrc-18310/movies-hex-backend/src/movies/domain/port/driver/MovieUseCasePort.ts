import Movie from '../../movie/Movie'

export default interface MovieUseCasePort {
  getMovies(): Movie[]
}
