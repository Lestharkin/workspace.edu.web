import FooterController from './controller/FooterController.js';
import FooterView from './view/FooterView.js';
export default class Footer {
    footerController;
    constructor(parent) {
        this.footerController = new FooterController(new FooterView(parent));
    }
    deploy = () => {
        this.footerController.init();
    };
}
