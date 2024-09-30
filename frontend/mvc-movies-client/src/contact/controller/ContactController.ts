import ContactModel from '../model/ContactModel.js'
import ContactView from '../view/ContactView.js'

export default class ContactController {
  private readonly view: ContactView
  private readonly model: ContactModel

  constructor(view: ContactView, model: ContactModel) {
    this.view = view
    this.model = model
  }

  public init = async (): Promise<void> => {
    this.model.init()
    this.view.init()
    this.view.render()
    this.view.addListeners(this.model.sendMessage.bind(this.model))
  }
}
