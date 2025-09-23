export default class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('IndexController');
    }
    init = () => {
        this.view.render();
    };
}
