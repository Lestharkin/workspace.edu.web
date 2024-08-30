import IndexController from './controller/IndexController.js'
import IndexModel from './model/IndexModel.js'
import IndexView from './view/IndexView.js'

const view = new IndexView()
const model = new IndexModel()
const index = new IndexController(view, model)
index.init()
