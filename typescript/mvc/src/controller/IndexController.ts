import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor (private readonly model: IndexModel, private readonly view: IndexView) { }

  public start (): void {
    const data = this.model.getData()
    if (data !== null) {
      const dataList = [data]
      this.view.init(dataList)
    } else {
      this.view.init(['Not found'])
    }
  }
}
