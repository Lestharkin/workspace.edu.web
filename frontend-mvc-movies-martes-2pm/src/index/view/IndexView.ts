export default class IndexView {
  private readonly main: HTMLElement

  constructor() {
    this.main = document.querySelector('main') ?? document.createElement('main')
  }

  readonly getMainHTML = (): HTMLElement => this.main

  readonly render = () => {}
}
