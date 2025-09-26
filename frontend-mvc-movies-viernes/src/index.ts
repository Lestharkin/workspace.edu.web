import IndexController from './index/controller/IndexController.js'
import IndexModel from './index/model/IndexModel.js'
import IndexView from './index/view/IndexView.js'

const index = new IndexController(new IndexModel(), new IndexView())
index.initComponent()
