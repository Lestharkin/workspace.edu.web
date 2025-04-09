import IndexController from './controller/IndexController.js'
import IndexModel from './model/IndexModel.js'
import IndexView from './view/IndexView.js'

export default class Index {
  private readonly IndexModel: IndexModel
  private readonly IndexView: IndexView
  private readonly IndexController: IndexController

  constructor() {
    this.IndexModel = new IndexModel()
    this.IndexView = new IndexView()
    this.IndexController = new IndexController(this.IndexModel, this.IndexView)
  }

  readonly init = (elements: HTMLElement[]) => {
    this.IndexController.init(elements)
  }
}
