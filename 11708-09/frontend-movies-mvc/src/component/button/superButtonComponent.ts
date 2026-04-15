import ButtonComponent, { ButtonType } from './ButtonComponent.js'

export default class SuperButtonComponent extends ButtonComponent {
  constructor(text: string, fn: () => void, fn2: () => void, type: ButtonType) {
    super(text, fn, type)
    this.button.addEventListener('mouseover', fn2)
  }
}
