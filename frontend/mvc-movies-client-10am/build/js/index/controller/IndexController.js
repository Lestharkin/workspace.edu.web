import Menu from '../../menu/Menu.js';
import Movies from '../../movies/Movies.js';
export default class IndexController {
    indexModel;
    indexView;
    menu;
    movies;
    constructor(indexModel, indexView) {
        this.indexModel = indexModel;
        this.indexView = indexView;
        this.movies = Movies.create();
        this.menu = Menu.create();
    }
    init = async () => {
        this.menu.init();
        this.movies.init();
        this.indexModel.init();
        this.indexView.init(this.searchMovies);
    };
    searchMovies = (search) => {
        this.movies.searchMovies(search);
    };
}
