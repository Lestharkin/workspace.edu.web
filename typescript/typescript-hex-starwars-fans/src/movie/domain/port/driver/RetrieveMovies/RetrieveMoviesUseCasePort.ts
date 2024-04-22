import Movie from "../../../model/movie/Movie"

export default interface RetrieveMoviesUseCasePort {
  getMovies(): Promise<Movie[]>
}
  
