export default class MovieController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('MovieController');
    }
    init = async () => {
        await this.model.init();
        this.view.render();
    };
}
