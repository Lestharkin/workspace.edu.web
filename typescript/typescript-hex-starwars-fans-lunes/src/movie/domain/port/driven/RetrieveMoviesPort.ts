import Movie from "../../model/movie/Movie"

export default interface RetrieveMoviesPort {
  findAll: () => Promise<Movie[]>
}