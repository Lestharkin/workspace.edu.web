export default class IndexView {
  private readonly main: HTMLElement

  constructor() {
    const main = document.querySelector('main') as HTMLElement
    if (!main) {
      this.main = document.createElement('main')
    }
    this.main = main
  }

  readonly init = (elements: HTMLElement[]) => {
    console.log('IndexView initialized')
    elements.forEach((element) => {
      this.main.appendChild(element)
    })
  }

  readonly render = () => {}
}
