export default class LayoutComponent {
  constructor(
    private readonly nav: HTMLElement,
    private readonly main: HTMLElement,
    private readonly footer: HTMLElement,
  ) {}

  readonly getLayoutHTML = () => {
    const layout = document.createElement('div')
    this.main.classList.add(
      'd-flex',
      'flex-row',
      'justify-content-center',
      'align-items-start',
    )
    layout.appendChild(this.nav)
    layout.appendChild(this.main)
    layout.appendChild(this.footer)

    return layout
  }
}
