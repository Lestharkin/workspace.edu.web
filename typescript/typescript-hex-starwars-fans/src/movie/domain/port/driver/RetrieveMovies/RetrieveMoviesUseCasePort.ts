import Movie from "../../../model/Movie";

export default interface RetrieveMoviesUseCasePort {
  getMovies(): Promise<Movie[]>
}
  
