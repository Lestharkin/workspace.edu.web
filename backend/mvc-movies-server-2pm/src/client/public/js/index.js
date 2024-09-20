import IndexController from './index/controller/IndexController.js';
import IndexModel from './index/model/IndexModel.js';
import IndexView from './index/view/IndexView.js';
const indexModel = new IndexModel();
const indexView = new IndexView();
const rentalMovies = new IndexController(indexModel, indexView);
rentalMovies.init();
