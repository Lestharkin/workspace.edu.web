export default class MovieController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('MovieController');
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        console.log('MovieController initComponent');
    };
}
