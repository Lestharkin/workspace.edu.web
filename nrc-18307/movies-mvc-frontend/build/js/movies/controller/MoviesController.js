export default class MoviesController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = async () => {
        console.log('MoviesController initialized');
        await this.model.init();
        this.view.init();
        this.view.render();
    };
}
