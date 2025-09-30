import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView {
    parent;
    movie;
    constructor(parent) {
        this.parent = parent;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
    }
    render = () => {
        this.movie.innerHTML = MovieTemplate.render();
    };
}
