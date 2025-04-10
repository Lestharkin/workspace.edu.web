import IndexController from './controller/IndexController.js'
import IndexModel from './model/IndexModel.js'
import IndexView from './view/IndexView.js'

export default class Index {
  private readonly model: IndexModel
  private readonly view: IndexView
  private readonly controller: IndexController

  constructor() {
    this.model = new IndexModel()
    this.view = new IndexView()
    this.controller = new IndexController(this.model, this.view)
  }

  readonly init = () => {
    this.controller.init()
  }
}
