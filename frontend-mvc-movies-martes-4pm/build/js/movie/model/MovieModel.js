import Subject from '../../shared/Observer/Subject.js';
export default class MovieModel extends Subject {
    movies;
    constructor() {
        super();
        this.movies = [];
    }
    getMovies = async () => {
        const data = await fetch('../database/movies-2020s.json');
        this.movies = await data.json();
        return this.movies;
    };
    init = async () => {
        await this.getMovies();
        this.notifyAllObservers();
    };
}
