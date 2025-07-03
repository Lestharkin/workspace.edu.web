export default class MoviesController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = () => {
        console.log('MoviesController.init()');
        this.model.init();
        this.view.init();
        this.view.render();
    };
}
