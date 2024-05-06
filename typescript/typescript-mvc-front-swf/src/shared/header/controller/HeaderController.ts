import HeaderView from "../view/HeaderView.js"

export default class HeaderController {
  constructor(private readonly headerView: HeaderView) {}

  public init = async (): Promise<void> => {
    await this.headerView.render()
  }
}