import IndexController from '../controller/IndexController.js';
import IndexModel from '../model/IndexModel.js';
import IndexView from '../view/IndexView.js';
export default class IndexFactory {
    static create = () => {
        const model = new IndexModel();
        if (!model) {
            throw new Error('IndexModel not created');
        }
        const view = new IndexView();
        if (!view) {
            throw new Error('IndexView not created');
        }
        const index = new IndexController(model, view);
        if (!index) {
            throw new Error('IndexController not created');
        }
        return index;
    };
}
