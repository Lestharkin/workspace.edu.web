export default class IndexView {
  private readonly body: HTMLElement
  private readonly main: HTMLElement
  private readonly menu: HTMLElement

  constructor() {
    this.body = document.body
    this.main = this.body.querySelector('main') as HTMLElement
    this.menu = this.body.querySelector('menu') as HTMLElement
  }

  readonly getMainHTML = (): HTMLElement => this.main
  readonly getMenuHTML = (): HTMLElement => this.menu

  readonly initComponent = () => {}
}
