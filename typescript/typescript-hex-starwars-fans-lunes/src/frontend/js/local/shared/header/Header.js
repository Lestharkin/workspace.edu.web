import HeaderController from './controller/HeaderController.js';
import HeaderView from './view/HeaderView.js';
export default class Header {
    headerController;
    constructor(parent) {
        this.headerController = new HeaderController(new HeaderView(parent));
    }
    deploy = () => {
        this.headerController.init();
    };
}
