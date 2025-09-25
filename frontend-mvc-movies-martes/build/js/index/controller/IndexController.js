import MovieController from '../../movie/controller/MovieController.js';
import MovieModel from '../../movie/model/MovieModel.js';
import MovieView from '../../movie/view/MovieView.js';
export default class IndexController {
    model;
    view;
    movie;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = new MovieController(new MovieModel(), new MovieView(this.view.getMainHTML()));
    }
    init = () => {
        this.model.init();
        this.movie.init();
        this.view.render();
    };
}
