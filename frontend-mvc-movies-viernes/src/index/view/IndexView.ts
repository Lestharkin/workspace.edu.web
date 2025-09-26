export default class IndexView {
  private readonly body: HTMLElement

  constructor() {
    this.body = document.body
  }

  readonly initComponent = () => {
    this.body.innerHTML += `<h1>Hello, World!</h1>`
  }
}
