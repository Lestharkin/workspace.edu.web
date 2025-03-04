import SWCharacterInterface from "./SWCharacterInterface"
import SWMovieInterface from "./SWMovieInterface"

export default interface SWAPIInterface {
  fetchSWMovies: () => Promise<SWMovieInterface[]>
  fetchSWCharacters: (swMovie: SWMovieInterface) => Promise<SWCharacterInterface[]>
}