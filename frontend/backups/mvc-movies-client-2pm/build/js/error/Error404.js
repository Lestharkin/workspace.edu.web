import ErrorController from './controller/ErrorController.js';
import ErrorView from './view/ErrorView.js';
export default class Error404 {
    static create = () => {
        const errorView = new ErrorView();
        return new ErrorController(errorView);
    };
}
