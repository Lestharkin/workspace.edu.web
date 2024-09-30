import MoviesController from './controller/MoviesController.js';
import MoviesModel from './model/MoviesModel.js';
import MoviesView from './view/MoviesView.js';
export default class Movies {
    static create() {
        const model = new MoviesModel();
        const view = new MoviesView(model);
        const controller = new MoviesController(model, view);
        return controller;
    }
}
