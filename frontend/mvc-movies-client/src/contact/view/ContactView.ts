import ContactTemplate from '../template/ContactTemplate.js'

export default class ContactView {
  private selector: HTMLDivElement
  private readonly selectorName = 'contact'

  constructor() {
    this.selector = document.createElement('div')
  }

  public init = (): void => {
    this.selector = document.querySelector(this.selectorName) as HTMLDivElement
  }

  public render = (): void => {
    this.selector.innerHTML = ''
    const div = document.createElement('div')
    div.className = 'contact-form'
    div.innerHTML = ContactTemplate.create()
    this.selector.appendChild(div)
  }
}
