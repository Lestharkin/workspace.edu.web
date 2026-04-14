export default class IndexModel {
    movies;
    constructor() {
        this.movies = [];
    }
    init = () => {
        console.log('IndexModel loaded');
    };
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