export default class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('IndexController');
    }
    initComponent = () => {
        console.log('initComponent IndexController');
        this.model.initComponent();
        this.view.initComponent();
        this.view.render();
    };
}
