import MoviesController from './controller/MoviesController.js';
import MoviesModel from './model/MoviesModel.js';
import MoviesView from './view/MoviesView.js';
export default class Movies {
    get = () => new MoviesController(new MoviesModel(), new MoviesView());
}
