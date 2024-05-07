import IndexController from './index/controller/IndexController.js';
import IndexView from './index/view/IndexView.js';
const layout = document.querySelector('#layout');
const index = new IndexController(new IndexView(layout));
index.init();
