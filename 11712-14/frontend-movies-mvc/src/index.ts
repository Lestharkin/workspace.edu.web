import IndexController from './movies/controller/IndexController.js'
import IndexModel from './movies/model/IndexModel.js'
import IndexView from './movies/view/IndexView.js'

const model = new IndexModel()
const view = new IndexView(model)
const index = new IndexController(model, view)
index.init()
