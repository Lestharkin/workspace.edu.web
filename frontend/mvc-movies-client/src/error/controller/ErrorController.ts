import ErrorView from '../view/ErrorView.js'

export default class ErrorController {
  private readonly view: ErrorView

  constructor(view: ErrorView) {
    this.view = view
  }

  public init = (): void => {
    this.view.init()
    this.view.render()
  }
}
