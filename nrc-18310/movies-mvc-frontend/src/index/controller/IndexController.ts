import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    this.model = model
    this.view = view
  }
  readonly init = (elements: HTMLElement[]) => {
    console.log('IndexController initialized')
    this.model.init()
    this.view.init(elements)
    this.view.render()
  }
}
