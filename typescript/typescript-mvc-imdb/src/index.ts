import IndexController from './controller/IndexController.js'
import IndexModel from './model/IndexModel.js'
import IndexView from './view/IndexView.js'

const indexController = new IndexController(new IndexView(), new IndexModel())
indexController.start()
