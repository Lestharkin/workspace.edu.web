export default class MoviesController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = () => {
        console.log('MoviesController initialized');
        this.model.init();
        this.view.render();
    };
}
