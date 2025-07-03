export default class IndexView {
  private readonly main: HTMLElement

  constructor() {
    this.main = document.querySelector('main') as HTMLElement
    if (!this.main) {
      this.main = document.createElement('main')
    }
  }

  readonly init = (elements: HTMLElement[]) => {
    console.log('IndexView initialized')
    elements.forEach((element) => {
      this.main.appendChild(element)
    })
  }

  readonly render = () => {}
}
