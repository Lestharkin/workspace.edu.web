import IndexController from './index/controller/IndexController.js';
import IndexModel from './index/model/IndexModel.js';
import IndexView from './index/view/IndexView.js';
const view = new IndexView();
const model = new IndexModel();
const index = new IndexController(model, view);
index.initComponent();
