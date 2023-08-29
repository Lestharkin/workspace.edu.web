import IndexController from './controller/IndexController.js'
import IndexModel from './model/IndexModel.js'
import IndexView from './view/IndexView.js'

const index = new IndexController(new IndexModel(), new IndexView())
index.init()
