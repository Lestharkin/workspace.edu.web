import Repository from "../../repository/RepositoryInterface"
import MovieDataInterface from "../../types/MovieDataInterface"

export default interface SWAPIRepositoryPort extends Repository<string, MovieDataInterface> {
}