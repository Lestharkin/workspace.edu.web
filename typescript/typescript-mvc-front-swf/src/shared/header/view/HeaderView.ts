import View from "../../../util/view/View.js"

export default class HeaderView extends View {
  constructor(parent: HTMLElement) {
    super(parent, './partials/shared/header/header.html')
  }

  public render = async (): Promise<void> => {
    await this.load()
  }
}