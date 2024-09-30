import ErrorController from './controller/ErrorController.js';
import ErrorView from './view/ErrorView.js';
export default class Error404 {
    static create = () => {
        const view = new ErrorView();
        return new ErrorController(view);
    };
}
