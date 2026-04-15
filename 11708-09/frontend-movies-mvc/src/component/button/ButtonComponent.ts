export default class ButtonComponent {
  protected readonly button: HTMLButtonElement

  constructor(text: string, fn: () => void, type: ButtonType) {
    this.button = document.createElement('button')
    this.button.classList.add('btn', type)
    this.button.textContent = text
    this.button.setAttribute('type', 'button')
    this.button.addEventListener('click', fn)
  }

  get(): HTMLButtonElement {
    return this.button
  }
}

export enum ButtonType {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  success = 'btn-success',
  danger = 'btn-danger',
  warning = 'btn-warning',
  info = 'btn-info',
  light = 'btn-light',
  dark = 'btn-dark',
}
