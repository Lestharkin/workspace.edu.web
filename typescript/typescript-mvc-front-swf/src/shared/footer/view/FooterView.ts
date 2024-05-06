import View from "../../../util/view/View.js"

export default class FooterView extends View {
  constructor(parent: HTMLElement) {
    super(parent, './partials/shared/footer/footer.html')
  }

  public render = async (): Promise<void> => {
    await this.load()
  }
}