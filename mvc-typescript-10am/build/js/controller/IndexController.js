export default class IndexController {
    view;
    model;
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    init() {
        this.model.init();
        this.view.init();
    }
}
