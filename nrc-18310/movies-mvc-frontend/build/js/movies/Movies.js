import MoviesController from './controller/MoviesController.js';
import MoviesModel from './model/MoviesModel.js';
import MoviesView from './view/MoviesView.js';
export default class Movies {
    controller;
    model;
    view;
    constructor() {
        this.model = new MoviesModel();
        this.view = new MoviesView();
        this.controller = new MoviesController(this.model, this.view);
    }
    init = async () => {
        console.log('Movies initialized');
        await this.controller.init();
    };
    getMoviesHTML = () => {
        return this.view.getMoviesHTML();
    };
}
