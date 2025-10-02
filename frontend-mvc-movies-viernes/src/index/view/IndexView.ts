export default class IndexView {
  private readonly body: HTMLElement
  private readonly main: HTMLElement

  constructor() {
    this.body = document.body
    this.main = this.body.querySelector('main') as HTMLElement
  }

  readonly getMainHTML = () => this.main.innerHTML

  readonly initComponent = () => {
    this.main.innerHTML += `<h1>Hello, World!</h1>`
  }
}
