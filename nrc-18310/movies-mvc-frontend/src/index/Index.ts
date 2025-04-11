import IndexController from './controller/IndexController.js'
import IndexModel from './model/IndexModel.js'
import IndexView from './view/IndexView.js'

export default class Index {
  private readonly controller: IndexController
  private readonly model: IndexModel
  private readonly view: IndexView

  constructor() {
    this.model = new IndexModel()
    this.view = new IndexView()
    this.controller = new IndexController(this.model, this.view)
  }

  readonly init = (elements: HTMLElement[]) => {
    console.log('Index initialized')
    this.controller.init(elements)
  }
}
