import MovieDataInterface from "../../types/MovieDataInterface"

export default interface SWAPIRepositoryPort {
  findALL: () => Promise<MovieDataInterface[]>
}