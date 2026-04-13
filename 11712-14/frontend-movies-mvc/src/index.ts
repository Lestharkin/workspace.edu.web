import IndexController from './movies/controller/IndexController.js'
import IndexModel from './movies/model/IndexModel.js'
import IndexView from './movies/view/IndexView.js'

const index = new IndexController(new IndexModel(), new IndexView())
index.init()
