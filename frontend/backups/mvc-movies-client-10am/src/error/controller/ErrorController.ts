import ErrorView from '../view/ErrorView.js'

export default class ErrorController {
  private view: ErrorView

  constructor(view: ErrorView) {
    this.view = view
  }

  public init = (): void => {
    this.view.init()
    this.view.render()
  }
}
