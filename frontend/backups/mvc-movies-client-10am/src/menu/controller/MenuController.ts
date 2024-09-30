import MenuModel from '../model/MenuModel.js'
import MenuView from '../view/MenuView.js'

export default class MenuController {
  private model: MenuModel
  private view: MenuView

  constructor(model: MenuModel, view: MenuView) {
    this.model = model
    this.view = view
  }

  public init(): void {
    this.model.init()
    this.view.init(this.model.getMenu())
  }
}
