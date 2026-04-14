import ButtonComponent, { ButtonType } from './ButtonComponent.js'

export default class SuperButtonComponent extends ButtonComponent {
  static readonly getSuperButtonHTML = (
    root: HTMLDivElement,
    fn: () => void,
  ) => {
    const button = ButtonComponent.getButtonHTML(
      'Super Button',
      ButtonType.Success,
      fn,
      root,
    )
    button.addEventListener('mousedown', fn)
    button.classList.add('w-100')
  }
}
