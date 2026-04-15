import ButtonComponent, { ButtonType, } from '../../../component/button/ButtonComponent.js';
export default class HeaderComponent {
    header;
    constructor() {
        this.header = document.createElement('header');
        this.header.classList.add('header');
    }
    get(fn) {
        this.header.innerHTML = `
    <form role="search">
      <div>
        <input type="search" class="form-control" id="search" placeholder="Buscar filme" aria-label="Search">        
      </div>
      <div id="search-button" class="text-end mt-2">       
      </div>
    </form>
    `;
        const divSearchButton = this.header.querySelector('#search-button');
        divSearchButton.appendChild(new ButtonComponent('Search', fn, ButtonType.primary).get());
        return this.header;
    }
}
//# sourceMappingURL=HeaderComponent.js.map