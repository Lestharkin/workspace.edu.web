export default class ContactController {
    view;
    constructor(view) {
        this.view = view;
    }
    init = () => {
        this.view.init();
        this.view.render();
    };
}
