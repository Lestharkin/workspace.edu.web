import MenuTemplate from '../template/MenuTemplate.js'
import { Menu } from '../types/Menu.js'

export default class MenuView {
  private menu: Menu[]
  private selector: HTMLDivElement
  private selectorName = 'menu'

  constructor() {
    this.menu = []
    this.selector = document.createElement('div')
  }

  public init = async (menu: Menu[]): Promise<void> => {
    this.menu = menu
    this.selector = document.querySelector(this.selectorName) as HTMLDivElement
    this.render()
  }

  public render = (): void => {
      this.selector.appendChild(MenuTemplate.render(this.menu))    
  }
}
