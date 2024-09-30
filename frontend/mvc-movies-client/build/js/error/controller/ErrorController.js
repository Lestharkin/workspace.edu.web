export default class ErrorController {
    view;
    constructor(view) {
        this.view = view;
    }
    init = () => {
        this.view.init();
        this.view.render();
    };
}
