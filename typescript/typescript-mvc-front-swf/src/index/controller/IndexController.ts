import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor(private readonly indexView: IndexView) {}

  public init = (): void => {
    this.indexView.render()
  }
}
