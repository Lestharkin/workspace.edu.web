import IndexController from './index/controller/IndexController.js'
import IndexModel from './index/model/IndexModel.js'
import IndexView from './index/view/IndexView.js'

const model = new IndexModel()
const view = new IndexView()

const index = new IndexController(model, view)
index.init()
