import MenuTemplate from '../template/MenuTemplate.js'
import MenuItem from '../types/MenuItem.js'

export default class MenuView {
  private readonly menuTemplate: MenuTemplate

  constructor(private readonly parent: HTMLElement) {
    this.menuTemplate = new MenuTemplate([])
  }

  readonly initComponent = (menu: MenuItem[]) => {
    this.menuTemplate.setMenu(menu)
    this.parent.appendChild(this.menuTemplate.getMenuNode())
  }

  readonly render = () => {
    this.parent.innerHTML = ''
    this.parent.appendChild(this.menuTemplate.getMenuNode())
  }
}
