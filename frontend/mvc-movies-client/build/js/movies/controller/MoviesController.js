export default class MoviesController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init() {
        this.model.init();
        this.view.init();
    }
    searchMovies = (search) => {
        this.model.searchMovies(search);
    };
}
