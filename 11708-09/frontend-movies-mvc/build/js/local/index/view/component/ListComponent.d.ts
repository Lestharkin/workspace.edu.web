import type { StarWarsMovie } from '../../model/types/StarWarsMovie.js';
export default class ListComponent {
    private readonly parent;
    private readonly listHTML;
    private list;
    constructor(parent: HTMLDivElement, list: StarWarsMovie[]);
    readonly setMovies: (movies: StarWarsMovie[]) => void;
    get(): void;
    readonly clear: () => void;
}
//# sourceMappingURL=ListComponent.d.ts.map