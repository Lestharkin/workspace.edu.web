import Component from '../../util/component/Component.js'
import FooterController from './controller/FooterController.js'
import FooterView from './view/FooterView.js'

export default class Footer implements Component {
  private readonly footerController: FooterController

  constructor(parent: HTMLElement) {
    this.footerController = new FooterController(new FooterView(parent))
  }

  public deploy = (): void => {
    this.footerController.init()
  }
}
