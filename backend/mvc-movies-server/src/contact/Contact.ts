import ContactController from './controller/ContactController'
import ContactModel from './model/ContactModel'
import ContactView from './view/ContactView'

export default class Contact {
  public static readonly createView = (): ContactView => {
    const contactModel = new ContactModel()
    const contactController = new ContactController(contactModel)
    return new ContactView(contactController)
  }
}
