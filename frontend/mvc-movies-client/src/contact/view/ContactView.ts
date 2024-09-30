import ContactTemplate from '../template/ContactTemplate.js'
import Message from '../types/Message.js'

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

  public addListeners = async (
    callback: (message: Message) => Promise<Response>
  ): Promise<void> => {
    const form = this.selector.querySelector('form') as HTMLFormElement
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      
      const controls = {
        name: form.querySelector('input[name="name"]') as HTMLInputElement,
        email: form.querySelector('input[name="email"]') as HTMLInputElement,
        message: form.querySelector('textarea[name="message"]') as HTMLTextAreaElement
      }

      const message = {
        name: controls.name.value,
        email: controls.email.value,
        message: controls.message.value
      }

      callback(message)
      
      Array.from(Object.values(controls)).forEach((control) => {
        control.value = ''
      })
            
      alert('Mensaje enviado')
    })
  }
}
