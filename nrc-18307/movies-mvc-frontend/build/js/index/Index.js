import IndexController from './controller/IndexController.js';
import IndexModel from './model/IndexModel.js';
import IndexView from './view/IndexView.js';
export default class Index {
    IndexModel;
    IndexView;
    IndexController;
    constructor() {
        this.IndexModel = new IndexModel();
        this.IndexView = new IndexView();
        this.IndexController = new IndexController(this.IndexModel, this.IndexView);
    }
    init = (elements) => {
        this.IndexController.init(elements);
    };
}
