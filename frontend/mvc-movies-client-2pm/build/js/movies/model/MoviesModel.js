import Environment from '../../shared/Environment.js';
import Subject from '../types/Subject.js';
export default class MoviesModel extends Subject {
    movies;
    data;
    search;
    page;
    limit;
    constructor() {
        super();
        this.movies = [];
        this.data = [];
        this.search = [];
        this.page = 1;
        this.limit = 10;
    }
    init = async () => {
        this.data = await this.getMoviesFromFile();
        this.setMoviesByPage(this.page);
    };
    getMovies = () => {
        return this.movies;
    };
    getPage = () => {
        return this.page;
    };
    getTotalPages = () => {
        return this.search.length > 0
            ? Math.floor(this.search.length / this.limit)
            : Math.floor(this.data.length / this.limit);
    };
    getMoviesFromFile = async () => {
        const response = await fetch(await Environment.getEndpointMovies());
        if (response.status !== 200) {
            return [];
        }
        return await response.json();
    };
    searchMovies = (search) => {
        if (search === '') {
            this.search = [];
        }
        else {
            this.search = this.searchMoviesByAll(search);
        }
        this.page = 1;
        this.setMoviesByPage(this.page);
    };
    searchMoviesByAll = (search) => {
        search = search.toLowerCase().trim();
        return this.data.filter((movie) => (movie.title ?? '').toLowerCase().includes(search) ||
            (movie.extract ?? '').toLowerCase().includes(search) ||
            String(movie.year).includes(search) ||
            (movie.genres ?? []).join(', ').toLowerCase().includes(search));
    };
    setMoviesByPage = (page) => {
        const start = (page - 1) * this.limit;
        const end = page * this.limit;
        this.movies =
            this.search.length > 0
                ? this.search.slice(start, end)
                : this.data.slice(start, end);
        this.notifyAllObservers();
    };
    setLimit = (limit) => {
        this.limit = limit;
        this.setMoviesByPage(this.page);
    };
    nextPage = () => {
        if (this.page < this.data.length / this.limit) {
            this.page++;
            this.setMoviesByPage(this.page);
        }
    };
    previousPage = () => {
        if (this.page > 1) {
            this.page--;
            this.setMoviesByPage(this.page);
        }
    };
}
