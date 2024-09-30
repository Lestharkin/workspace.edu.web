export default class ContactController {
    view;
    model;
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    init = () => {
        this.model.init();
        this.view.init();
        this.view.render();
    };
}
