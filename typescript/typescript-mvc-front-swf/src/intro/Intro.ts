import Component from '../util/component/Component.js'
import IntroController from './controller/IntroController.js'
import IntroView from './view/IntroView.js'

export default class Intro implements Component {
  private readonly introController: IntroController

  constructor(parent: HTMLElement) {
    this.introController = new IntroController(new IntroView(parent))
  }

  public deploy = (): void => {
    this.introController.init()
  }
}
