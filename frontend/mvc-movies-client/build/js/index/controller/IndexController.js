import Contact from '../../contact/Contact.js';
import Error404 from '../../error/Error404.js';
import Menu from '../../menu/Menu.js';
import Movies from '../../movies/Movies.js';
export default class IndexController {
    indexModel;
    indexView;
    menu;
    movies;
    error;
    contact;
    constructor(indexModel, indexView) {
        this.indexModel = indexModel;
        this.indexView = indexView;
        this.movies = Movies.create();
        this.menu = Menu.create();
        this.error = Error404.create();
        this.contact = Contact.create();
    }
    init = async () => {
        this.indexModel.init();
        this.loadMain(this.indexView.getPageFromMeta());
        this.indexView.init(this.searchMovies);
    };
    searchMovies = (search) => {
        this.movies.searchMovies(search);
    };
    loadMain = async (component) => {
        this.menu.init();
        this.indexView.renderMain(component ?? 'error');
        switch (component) {
            case 'movies':
                this.loadMovies();
                break;
            case 'contact':
                this.loadContact();
                break;
            default:
                this.loadError();
        }
    };
    loadMovies = async () => {
        this.movies.init();
    };
    loadContact = async () => {
        this.contact.init();
    };
    loadError = async () => {
        this.error.init();
    };
}
