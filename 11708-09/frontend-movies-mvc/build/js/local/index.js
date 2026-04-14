import IndexController from './controller/IndexController.js';
import IndexModel from './model/IndexModel.js';
import IndexView from './view/IndexView.js';
const model = new IndexModel();
const view = new IndexView();
const controller = new IndexController(model, view);
controller.init();
//# sourceMappingURL=index.js.map