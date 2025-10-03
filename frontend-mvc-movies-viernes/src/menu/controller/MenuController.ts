import MenuModel from '../model/MenuModel.js'
import MenuView from '../view/MenuView.js'

export default class MenuController {
  constructor(
    private readonly model: MenuModel,
    private readonly view: MenuView
  ) {}

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.initComponent(this.model.getMenu())
  }
}
