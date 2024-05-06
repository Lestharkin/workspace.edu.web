import IntroController from './controller/IntroController.js';
import IntroView from './view/IntroView.js';
export default class Intro {
    introController;
    constructor(parent) {
        this.introController = new IntroController(new IntroView(parent));
    }
    deploy = () => {
        this.introController.init();
    };
}
