import Subject from '../../shared/observer/Subject.js';
import type { StarWarsMovie } from './types/StarWarsMovie.js';
export default class IndexModel extends Subject {
    private movies;
    constructor();
    readonly init: () => Promise<void>;
    readonly getMovies: () => StarWarsMovie[];
    readonly fetchMovies: () => Promise<StarWarsMovie[]>;
}
//# sourceMappingURL=IndexModel.d.ts.map