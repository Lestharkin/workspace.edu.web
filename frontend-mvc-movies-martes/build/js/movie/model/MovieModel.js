export default class MovieModel {
    movies;
    constructor() {
        this.movies = [];
    }
    getMovies = async () => {
        const data = await fetch('./movies-2020s.json');
        this.movies = await data.json();
        return this.movies;
    };
    init = async () => {
        await this.getMovies();
    };
}
