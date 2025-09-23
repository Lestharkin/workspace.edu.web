import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    console.log('IndexController')
  }

  readonly init = () => {
    this.view.render()
  }
}
