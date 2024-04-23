import Movie from "../../../model/movie/Movie"

export default interface RetrieveMoviesServicePort {
  getMovies(): Promise<Movie[]>
}
  
