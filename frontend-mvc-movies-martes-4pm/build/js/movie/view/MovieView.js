import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView extends Observer {
    parent;
    movie;
    constructor(parent, movieModel) {
        super(movieModel);
        this.parent = parent;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
    }
    update = () => {
        this.render();
    };
    render = () => {
        this.movie.innerHTML = MovieTemplate.getMoviesGridHTML();
    };
}
