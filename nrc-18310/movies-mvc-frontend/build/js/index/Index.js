import IndexController from './controller/IndexController.js';
import IndexModel from './model/IndexModel.js';
import IndexView from './view/IndexView.js';
export default class Index {
    controller;
    model;
    view;
    constructor() {
        this.model = new IndexModel();
        this.view = new IndexView();
        this.controller = new IndexController(this.model, this.view);
    }
    init = (elements) => {
        console.log('Index initialized');
        this.controller.init(elements);
    };
}
