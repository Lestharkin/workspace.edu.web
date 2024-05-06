import Component from '../../util/component/Component.js'
import NavbarController from './controller/NavbarController.js'
import NavbarView from './view/NavbarView.js'

export default class Navbar implements Component {
  private readonly navbarController: NavbarController

  constructor(parent: HTMLElement) {
    this.navbarController = new NavbarController(new NavbarView(parent))
  }

  public deploy = (): void => {
    this.navbarController.init()
  }

  public addEventListeners = (fn: EventListenerOrEventListenerObject[]): void => {
    this.navbarController.addEventListeners(fn)
  }
}
