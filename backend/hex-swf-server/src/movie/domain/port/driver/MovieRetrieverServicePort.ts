import Movie from '../../model/movie/Movie'

export default interface MovieRetrieverServicePort {
  retrieve: () => Promise<Movie[]>
}
