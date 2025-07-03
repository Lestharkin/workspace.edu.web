import IndexController from './controller/IndexController.js';
import IndexModel from './model/IndexModel.js';
import IndexView from './view/IndexView.js';
export default class Index {
    model;
    view;
    controller;
    constructor() {
        this.model = new IndexModel();
        this.view = new IndexView();
        this.controller = new IndexController(this.model, this.view);
    }
    init = (elements) => {
        this.controller.init(elements);
    };
}
