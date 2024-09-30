import Observer from '../types/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
import PaginationControlTemplate from '../template/PaginationControlTemplate.js';
export default class MoviesView extends Observer {
    selector;
    selectorName = 'movies';
    constructor(subject) {
        super(subject);
        this.selector = document.createElement('div');
    }
    init() {
        this.selector = document.querySelector(this.selectorName);
    }
    update() {
        this.render();
    }
    async render() {
        this.selector.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'movies';
        div.innerHTML = await MovieTemplate.render(this.movies());
        this.selector.appendChild(div);
        this.selector.appendChild(PaginationControlTemplate.render(this.moviesModel().previousPage, this.moviesModel().getPage(), this.moviesModel().getTotalPages(), this.moviesModel().nextPage));
    }
    moviesModel() {
        return this.subject;
    }
    movies() {
        return this.moviesModel().getMovies();
    }
}
