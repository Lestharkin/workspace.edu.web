import PioneerView from "./PioneerView"

export default class IndexView {
  private pioneerView: PioneerView | undefined

  constructor() {
    this.pioneerView = undefined
  }

  public setPioneerView(pioneerView: PioneerView): void {
    this.pioneerView = pioneerView
  }

  public render(): void  {
    if (this.pioneerView) {
      this.pioneerView.render()
    }
  }
}