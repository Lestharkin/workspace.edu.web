import MovieFactory from '../../movie/factory/MovieFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = MovieFactory.create(this.view.getMainHTML());
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.movie.initComponent();
    };
}
