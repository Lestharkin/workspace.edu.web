import MenuController from '../controller/MenuController.js'
import MenuModel from '../model/MenuModel.js'
import MenuView from '../view/MenuView.js'

export default class MenuFactory {
  static readonly create = (parent: HTMLElement) => {
    const model = new MenuModel()
    const view = new MenuView(parent)
    return new MenuController(model, view)
  }
}
