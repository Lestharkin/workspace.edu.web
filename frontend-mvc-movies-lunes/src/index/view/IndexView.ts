export default class IndexView {
  private readonly body: HTMLElement

  constructor() {
    console.log('IndexView')
    this.body = document.body
  }

  readonly initComponent = () => {
    console.log('initComponent IndexView')
  }

  readonly render = () => {
    this.body.innerHTML += `<h1>Hello, World!</h1>`
  }
}
