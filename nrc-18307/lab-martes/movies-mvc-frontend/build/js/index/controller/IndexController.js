export default class IndexController {
    model;
    view;
    moviesComponent;
    constructor(model, view, moviesComponent) {
        this.model = model;
        this.view = view;
        this.moviesComponent = moviesComponent;
    }
    init = () => {
        console.log('IndexController initialized');
        this.model.init();
        this.view.render();
        this.moviesComponent.init();
    };
}
