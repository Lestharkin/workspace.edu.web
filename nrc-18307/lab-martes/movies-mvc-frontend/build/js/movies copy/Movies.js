import MoviesController from './controller/MoviesController';
import MoviesModel from './model/MoviesModel';
import MoviesView from './view/MoviesView';
export default class Movies {
    get = () => new MoviesController(new MoviesModel(), new MoviesView());
}
