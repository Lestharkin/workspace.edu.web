import IntroView from "../view/IntroView.js"

export default class IntroController {
  constructor(private readonly introView: IntroView) {}

  public init = async (): Promise<void> => {
    await this.introView.render()
  }
}