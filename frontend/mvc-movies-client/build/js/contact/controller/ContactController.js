export default class ContactController {
    view;
    model;
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    init = async () => {
        this.model.init();
        this.view.init();
        this.view.render();
        this.view.addListeners(this.model.sendMessage.bind(this.model));
    };
}
