export default class IndexView {
  private readonly index: HTMLElement

  constructor() {
    this.index =
      document.querySelector('body') ?? document.createElement('body')
  }

  readonly render = () => {
    this.index.innerHTML += `<h1>Index View</h1>`
  }
}
