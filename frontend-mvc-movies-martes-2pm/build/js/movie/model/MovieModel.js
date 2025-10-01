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
    get10Movies = async () => {
        this.movies = this.movies.slice(0, 10);
        console.log(this.movies);
        this.notifyAllObservers();
    };
    init = async () => {
        await this.getMovies();
        this.notifyAllObservers();
    };
}
