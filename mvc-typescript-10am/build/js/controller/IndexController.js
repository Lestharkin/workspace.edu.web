export default class IndexController {
    view;
    model;
    constructor(view, model) {
        console.log('IndexController constructor');
        this.view = view;
        this.model = model;
    }
    init() {
        console.log('IndexController init');
        this.model.init();
        this.view.init();
    }
}
