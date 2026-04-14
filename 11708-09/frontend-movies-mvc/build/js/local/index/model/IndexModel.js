import Subject from '../../shared/observer/Subject.js';
export default class IndexModel extends Subject {
    movies;
    constructor() {
        super();
        this.movies = [];
    }
    init = async () => {
        this.movies = await this.fetchMovies();
        this.notify();
    };
    getMovies = () => this.movies;
    fetchMovies = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
            return data.results;
        }
        catch (error) {
            console.error('Error fetching movies:', error);
            return [];
        }
    };
}
//# sourceMappingURL=IndexModel.js.map