export default class ButtonComponent {
  static readonly getButtonHTML = (
    text: string,
    type: ButtonType = ButtonType.Primary,
    fn: () => void = () => {
      alert(`Button ${text} clicked!`)
    },
    root: HTMLElement = document.createElement('div'),
  ) => {
    const button = document.createElement('button')
    button.classList.add('btn', type)
    button.textContent = text
    button.addEventListener('click', fn)
    root.appendChild(button)
    return button
  }
}

export enum ButtonType {
  Primary = 'btn-primary',
  Secondary = 'btn-secondary',
  Success = 'btn-success',
  Danger = 'btn-danger',
  Warning = 'btn-warning',
  Info = 'btn-info',
  Light = 'btn-light',
  Dark = 'btn-dark',
}
