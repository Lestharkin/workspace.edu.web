import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {}

  readonly init = () => {
    console.log('IndexController.init()')
    this.model.init()
    this.view.init()
  }
}
