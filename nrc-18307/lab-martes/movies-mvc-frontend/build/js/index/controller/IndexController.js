export default class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = () => {
        console.log('IndexController initialized');
        this.model.init();
        this.view.render();
    };
}
