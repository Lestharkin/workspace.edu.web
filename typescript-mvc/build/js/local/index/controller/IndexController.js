export default class IndexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init = () => {
            this.view.render(this.model.getData());
        };
        this.init();
    }
}
