import Movie from '../movie/Movie'

export default interface MovieServiceInterface {
  retrieveMovies(): Movie[]
}
