import Component from '../../util/component/Component.js'
import HeaderController from './controller/HeaderController.js'
import HeaderView from './view/HeaderView.js'

export default class Header implements Component {
  private readonly headerController: HeaderController

  constructor(parent: HTMLElement) {
    this.headerController = new HeaderController(new HeaderView(parent))
  }

  public deploy = (): void => {
    this.headerController.init()
  }
}
