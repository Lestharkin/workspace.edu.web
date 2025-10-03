export default class MenuController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent(this.model.getMenu());
    };
}
