export default class IndexView {
  private readonly body: HTMLElement
  private readonly main: HTMLElement

  constructor() {
    this.body = document.body
    this.main = this.body.querySelector('main') as HTMLElement
  }

  readonly getMainHTML = (): HTMLElement => this.main

  readonly initComponent = () => {}
}
