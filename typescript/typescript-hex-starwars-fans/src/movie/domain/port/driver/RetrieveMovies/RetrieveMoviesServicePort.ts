import Movie from "../../../model/Movie";

export default interface RetrieveMoviesServicePort {
  getMovies(): Promise<Movie[]>
}
  
