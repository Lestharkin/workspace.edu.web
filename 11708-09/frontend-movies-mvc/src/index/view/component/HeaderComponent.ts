import ButtonComponent, {
  ButtonType,
} from '../../../component/button/ButtonComponent.js'

export default class HeaderComponent {
  private readonly header: HTMLDivElement

  constructor() {
    this.header = document.createElement('header') as HTMLDivElement
    this.header.classList.add('header')
  }

  public get(fn: () => void): HTMLDivElement {
    this.header.innerHTML = `
    <form role="search">
      <div>
        <input type="search" class="form-control" id="search" placeholder="Buscar filme" aria-label="Search">        
      </div>
      <div id="search-button" class="text-end mt-2">       
      </div>
    </form>
    `
    const divSearchButton = this.header.querySelector(
      '#search-button',
    ) as HTMLDivElement

    divSearchButton.appendChild(
      new ButtonComponent('Search', fn, ButtonType.primary).get(),
    )
    return this.header
  }
}
