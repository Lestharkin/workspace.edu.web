import MovieFactory from '../../movie/factory/MovieFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    movie2;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = MovieFactory.create(this.view.getMainHTML());
        this.movie2 = MovieFactory.create(this.view.getMainHTML());
    }
    init = () => {
        this.model.init();
        this.movie.init();
        this.movie2.init();
        this.view.render();
    };
}
