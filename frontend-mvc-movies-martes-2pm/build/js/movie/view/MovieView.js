import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView extends Observer {
    parent;
    movie;
    constructor(parent, subject) {
        super(subject);
        this.parent = parent;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
    }
    update = () => {
        this.render();
    };
    render = async () => {
        const movies = await this.subject.getMovies();
        const movieTemplate = new MovieTemplate(movies);
        console.log(movieTemplate.getMoviesGridHTML());
        this.movie.innerHTML = movieTemplate.getMoviesGridHTML();
    };
}
