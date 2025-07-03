import MoviesController from './controller/IndexController';
import MoviesModel from './model/IndexModel';
import MoviesView from './view/IndexView';
export default class Movies {
    get = () => new MoviesController(new MoviesModel(), new MoviesView());
}
