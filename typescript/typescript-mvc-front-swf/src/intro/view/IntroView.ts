import View from '../../util/view/View.js'

export default class IntroView extends View {
  constructor(parent: HTMLElement) {
    super(parent, './partials/intro/intro.html')
  }

  public render = async (): Promise<void> => {
    await this.load()
  }

}
