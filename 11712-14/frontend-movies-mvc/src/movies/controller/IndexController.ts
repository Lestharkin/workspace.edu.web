import type IndexModel from '../model/IndexModel.js'
import type IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView,
  ) {}

  readonly init = async () => {
    this.view.init()
    await this.model.init()
  }
}
