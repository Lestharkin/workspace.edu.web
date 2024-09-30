import Error404 from '../../error/Error404.js';
import Menu from '../../menu/Menu.js';
import Movies from '../../movies/Movies.js';
export default class IndexController {
    indexModel;
    indexView;
    menu;
    movies;
    error;
    constructor(indexModel, indexView) {
        this.indexModel = indexModel;
        this.indexView = indexView;
        this.movies = Movies.create();
        this.menu = Menu.create();
        this.error = Error404.create();
    }
    init = async () => {
        this.indexView.renderMain('movies');
        this.menu.init();
        this.movies.init();
        this.error.init();
        this.indexModel.init();
        this.indexView.init(this.searchMovies);
    };
    searchMovies = (search) => {
        this.movies.searchMovies(search);
    };
}
