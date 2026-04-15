export default class LayoutComponent {
  private readonly layout: HTMLDivElement
  private readonly header: HTMLDivElement
  private readonly main: HTMLDivElement
  // private readonly footer: HTMLDivElement

  constructor(
    header: HTMLDivElement,
    private readonly root: HTMLElement,
  ) {
    this.header = header
    this.header.classList.add('p-5')
    this.layout = document.createElement('div') as HTMLDivElement
    this.main = document.createElement('main') as HTMLDivElement
    this.main.classList.add('bg-dark', 'text-white')
  }

  readonly getMain = () => this.main

  public get(): HTMLDivElement {
    this.layout.appendChild(this.header)
    this.layout.appendChild(this.main)

    this.root.appendChild(this.layout)
    return this.layout
  }
}
