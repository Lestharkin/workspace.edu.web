import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private view: IndexView
  private model: IndexModel

  constructor(view: IndexView, model: IndexModel) {
    this.view = view
    this.model = model
  }

  public init(): void  {
    this.model.init()
    this.view.init()
  }
}
