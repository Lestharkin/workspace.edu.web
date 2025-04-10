import MoviesController from './controller/MoviesController.js';
import MoviesModel from './model/MoviesModel.js';
import MoviesView from './view/MoviesView.js';
export default class Movies {
    moviesController;
    MoviesModel;
    MoviesView;
    constructor() {
        this.MoviesModel = new MoviesModel();
        this.MoviesView = new MoviesView(this.MoviesModel);
        this.moviesController = new MoviesController(this.MoviesModel, this.MoviesView);
    }
    init = async () => {
        await this.moviesController.init();
    };
    getMoviesHTML = () => {
        return this.MoviesView.getMoviesHTML();
    };
}
