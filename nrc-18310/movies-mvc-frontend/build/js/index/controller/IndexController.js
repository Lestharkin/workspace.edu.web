export default class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model = model;
        this.view = view;
    }
    init = (elements) => {
        console.log('IndexController initialized');
        this.model.init();
        this.view.init(elements);
        this.view.render();
    };
}
