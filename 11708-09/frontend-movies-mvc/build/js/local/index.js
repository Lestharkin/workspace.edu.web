import IndexController from './index/controller/IndexController.js';
import IndexModel from './index/model/IndexModel.js';
import IndexView from './index/view/IndexView.js';
const model = new IndexModel();
const view = new IndexView(model);
const controller = new IndexController(model, view);
controller.init();
//# sourceMappingURL=index.js.map