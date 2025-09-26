export default class IndexController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('IndexController');
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        console.log('IndexController initComponent');
    };
}
