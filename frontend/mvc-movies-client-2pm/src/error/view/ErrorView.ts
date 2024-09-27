import ErrorTemplate from '../template/ErrorTemplate.js'

export default class ErrorView {
  private selector: HTMLDivElement
  private readonly selectorName = 'error'

  constructor() {
    this.selector = document.createElement('div')
  }

  public init = (): void => {
    this.selector = document.querySelector(this.selectorName) as HTMLDivElement
  }

  public render = (): void => {
    this.selector.innerHTML = ''
    const div = document.createElement('div')
    div.className = 'error'
    div.innerHTML = ErrorTemplate.create()
    this.selector.appendChild(div)
  }
}
