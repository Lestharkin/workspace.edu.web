import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView extends Observer {
    parent;
    movie;
    movieTemplate;
    constructor(parent, movieModel) {
        super(movieModel);
        this.parent = parent;
        this.movie = document.createElement('movie');
        this.parent.appendChild(this.movie);
        this.movieTemplate = new MovieTemplate([]);
    }
    update = () => {
        this.render();
    };
    render = async () => {
        const movies = await this.subject.getMovies();
        this.movieTemplate.setMovies(movies);
        console.log(this.movieTemplate.getMoviesGridHTML());
        this.movie.innerHTML = this.movieTemplate.getMoviesGridHTML();
    };
}
