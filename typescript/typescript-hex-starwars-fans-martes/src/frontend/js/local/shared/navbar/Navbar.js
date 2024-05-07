import NavbarController from './controller/NavbarController.js';
import NavbarView from './view/NavbarView.js';
export default class Navbar {
    navbarController;
    constructor(parent) {
        this.navbarController = new NavbarController(new NavbarView(parent));
    }
    deploy = () => {
        this.navbarController.init();
    };
    addEventListeners = (fn) => {
        this.navbarController.addEventListeners(fn);
    };
}
