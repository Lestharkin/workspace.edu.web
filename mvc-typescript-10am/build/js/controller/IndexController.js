import PioneerModel from '../model/PioneerModel.js';
import PioneerView from '../view/PioneerView.js';
export default class IndexController {
    view;
    model;
    pioneerView;
    pioneerModel;
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.pioneerModel = new PioneerModel([]);
        this.pioneerView = new PioneerView(this.pioneerModel);
        this.view.setPioneerView(this.pioneerView);
    }
    init() {
        this.model.init();
        this.view.init();
    }
}
