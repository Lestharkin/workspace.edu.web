import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView extends Observer {
    parent;
    movieTemplate;
    constructor(parent, MovieModel) {
        super(MovieModel);
        this.parent = parent;
        this.movieTemplate = new MovieTemplate(this.subject.getMovies());
    }
    update = () => {
        this.render();
    };
    initComponent = () => { };
    render = () => {
        this.movieTemplate.setMovies(this.subject.getMovies());
        this.parent.innerHTML += this.movieTemplate.getMoviesHTML();
    };
}
