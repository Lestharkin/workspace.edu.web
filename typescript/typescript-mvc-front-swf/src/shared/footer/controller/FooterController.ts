import FooterView from '../view/FooterView.js'

export default class FooterController {
  constructor(private readonly footerView: FooterView) {}

  public init = async (): Promise<void> => {
    await this.footerView.render()
  }
}
