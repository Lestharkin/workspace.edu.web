import ContactView from '../view/ContactView.js'

export default class ContactController {
  private readonly view: ContactView

  constructor(view: ContactView) {
    this.view = view
  }

  public init = (): void => {
    this.view.init()
    this.view.render()
  }
}
