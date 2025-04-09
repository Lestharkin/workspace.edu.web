import Subject from '../../shared/types/Subject.js';
import NullMovie from '../types/NullMovie.js';
export default class MoviesModel extends Subject {
    moviesData;
    constructor() {
        super();
        this.moviesData = [NullMovie];
    }
    init = async () => {
        this.moviesData = await this.loadData();
    };
    getMoviesData = () => {
        return this.moviesData;
    };
    loadData = async () => {
        const response = await fetch('./database/movies-2020s.json');
        if (!response.ok) {
            return [NullMovie];
        }
        return await response.json();
    };
}
