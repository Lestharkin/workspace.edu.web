export default class IndexView {
  private readonly index: HTMLElement
  private readonly main: HTMLElement

  constructor() {
    this.index =
      document.querySelector('body') ?? document.createElement('body')
    this.main = document.querySelector('main') ?? document.createElement('main')
  }

  readonly getMainHTML = (): HTMLElement => this.main

  readonly render = () => {
    this.index.innerHTML += `<h1>Index View</h1>`
  }
}
