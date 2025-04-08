import IndexController from './controller/IndexController.js';
import IndexModel from './model/IndexModel.js';
import IndexView from './view/IndexView.js';
export default class Index {
    static get = () => new IndexController(new IndexModel(), new IndexView());
}
