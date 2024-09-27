import ErrorView from '../view/ErrorView'

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
