import ButtonComponent, { ButtonType, } from '../../../component/button/ButtonComponent.js';
export default class HeaderComponent {
    header;
    constructor() {
        this.header = document.createElement('header');
        this.header.classList.add('header');
    }
    get(fn) {
        this.header.innerHTML = `
    <form class="d-flex" role="search text-end">
        <input type="search" class="form-control m-2" id="search" placeholder="Buscar filme" aria-label="Search">        
    </form>
    `;
        this.header.appendChild(new ButtonComponent('Search', fn, ButtonType.primary).get());
        return this.header;
    }
}
//# sourceMappingURL=HeaderComponent.js.map